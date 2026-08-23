// Exercises the Cloudflare Worker against the built dist/ with a stubbed origin.
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { extname } from 'node:path'
import { test } from 'node:test'
import worker, { markdownPath, preferredType } from '../worker.mjs'

const CHROME =
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'

// Origin stub that behaves like GitHub Pages: /about → about.html, /about/ → about/index.html, misses → 404.html.
globalThis.fetch = async (input, init) => {
  const req = input instanceof Request ? input : new Request(input, init)
  let file = new URL(req.url).pathname.slice(1) || 'index.html'
  if (file.endsWith('/')) file += 'index.html'
  else if (!extname(file)) file += '.html'
  const path = new URL(`../dist/${file}`, import.meta.url)
  const type =
    { '.md': 'text/markdown; charset=utf-8', '.html': 'text/html; charset=utf-8' }[extname(file)] ??
    'image/png'
  const headers = { 'content-type': type, vary: 'Accept-Encoding' }
  if (!existsSync(path)) {
    return new Response(readFileSync(new URL('../dist/404.html', import.meta.url)), {
      status: 404,
      headers: { ...headers, 'content-type': 'text/html; charset=utf-8' },
    })
  }
  return new Response(readFileSync(path), { status: 200, headers })
}

const get = (path, accept) =>
  worker.fetch(
    new Request(`https://totono.xyz${path}`, { headers: accept === undefined ? {} : { accept } }),
  )

test('preferredType follows the acceptmarkdown.com test vectors', () => {
  assert.equal(preferredType('text/markdown'), 'text/markdown')
  assert.equal(preferredType('text/markdown, text/html;q=0.8'), 'text/markdown')
  assert.equal(preferredType('text/html'), 'text/html')
  assert.equal(preferredType('text/markdown;q=0, text/html'), 'text/html')
  assert.equal(preferredType('text/markdown;q=0', ['text/markdown']), null)
  assert.equal(preferredType(null), 'text/html')
  assert.equal(preferredType('*/*'), 'text/html')
  assert.equal(preferredType(CHROME), 'text/html')
  assert.equal(
    preferredType('text/html;q=0, */*'),
    'text/markdown',
    'specific q=0 is not overridden by */*',
  )
  assert.equal(preferredType('application/pdf'), null)
})

test('markdownPath maps every URL shape to the flat .md sibling', () => {
  assert.equal(markdownPath('/'), '/index.md')
  assert.equal(markdownPath('/about'), '/about.md')
  assert.equal(markdownPath('/about/'), '/about.md')
  assert.equal(markdownPath('/about.html'), '/about.md')
})

test('Accept: text/markdown serves the markdown sibling with Vary: Accept', async () => {
  for (const path of ['/about', '/about/', '/about.html']) {
    const res = await get(path, 'text/markdown')
    assert.equal(res.status, 200, path)
    assert.equal(res.headers.get('content-type'), 'text/markdown; charset=utf-8')
    assert.equal(res.headers.get('vary'), 'Accept-Encoding, Accept')
    assert.match(await res.text(), /^About\n# An independent software studio\./)
  }
  const home = await get('/', 'text/markdown, text/html;q=0.8')
  assert.match(await home.text(), /# Let's build something great together\./)
})

test('HTML clients get HTML, Vary: Accept and a Link to the markdown sibling', async () => {
  for (const accept of [undefined, '*/*', 'text/html', CHROME, 'text/markdown;q=0, text/html']) {
    const res = await get('/about', accept)
    assert.equal(res.status, 200, String(accept))
    assert.equal(res.headers.get('content-type'), 'text/html; charset=utf-8')
    assert.equal(res.headers.get('vary'), 'Accept-Encoding, Accept')
    assert.equal(res.headers.get('link'), '</about.md>; rel="alternate"; type="text/markdown"')
    assert.match(await res.text(), /<h1/)
  }
})

test('unknown paths stay 404: markdown body for markdown clients, HTML page otherwise', async () => {
  const md = await get('/does-not-exist', 'text/markdown')
  assert.equal(md.status, 404)
  assert.equal(md.headers.get('content-type'), 'text/markdown; charset=utf-8')
  assert.equal(md.headers.get('vary'), 'Accept')
  assert.match(await md.text(), /sitemap\.xml.*llms\.txt/s)

  const html = await get('/does-not-exist', CHROME)
  assert.equal(html.status, 404)
  assert.equal(html.headers.get('content-type'), 'text/html; charset=utf-8')
  assert.equal(html.headers.get('link'), null)
})

test('406 when nothing we produce is acceptable', async () => {
  const res = await get('/about', 'application/pdf')
  assert.equal(res.status, 406)
  assert.equal(res.headers.get('vary'), 'Accept')
  assert.match(await res.text(), /text\/html\n- text\/markdown/)
})

test('static assets and .md URLs pass straight through regardless of Accept', async () => {
  for (const path of ['/logo.png', '/sitemap.xml', '/llms.txt', '/about.md']) {
    const res = await get(path, 'text/markdown')
    assert.equal(res.status, 200, path)
    assert.equal(res.headers.get('vary'), 'Accept-Encoding', path)
    assert.equal(res.headers.get('link'), null)
  }
})
