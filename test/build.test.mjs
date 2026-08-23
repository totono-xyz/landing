// Checks the built site in dist/ for the machine-readable signals AI crawlers look for.
// Run with `npm test` (builds first).
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'

const read = (file) => readFileSync(new URL(`../dist/${file}`, import.meta.url), 'utf8')
const text = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
const meta = (html, selector) => html.match(new RegExp(`<meta ${selector} content="([^"]*)"`))?.[1]

const pages = {
  'index.html': '/',
  'about.html': '/about',
  'contact.html': '/contact',
  'privacy.html': '/privacy',
}

for (const [file, route] of Object.entries(pages)) {
  test(`${route} is prerendered with an H1, 500+ chars of text and full metadata`, () => {
    const html = read(file)
    assert.match(html, /<h1[\s>]/)
    assert.ok(text(html).length >= 500, `only ${text(html).length} chars`)
    assert.match(html, /<html lang="en">/)
    assert.match(html, new RegExp(`<link rel="canonical" href="https://totono.xyz${route}"`))
    assert.equal(meta(html, 'property="og:url"'), `https://totono.xyz${route}`)
    assert.match(
      html,
      new RegExp(
        `<link rel="alternate" type="text/markdown" href="https://totono.xyz/${file.replace('.html', '.md')}"`,
      ),
    )
    assert.equal(meta(html, 'property="og:type"'), 'website')
    assert.equal(meta(html, 'property="og:image"'), 'https://totono.xyz/logo.png')
    assert.ok(meta(html, 'name="description"'), 'missing description')
    assert.ok(meta(html, 'property="og:title"'), 'missing og:title')
    assert.doesNotMatch(html, /content=""/, 'empty meta content left over from the template')
  })
}

test('every page has a markdown sibling with a heading, 500+ chars and no HTML', () => {
  for (const file of [...Object.keys(pages), '404.html']) {
    const md = read(file.replace(/\.html$/, '.md'))
    assert.match(md, /^# .+$/m, file)
    assert.doesNotMatch(md, /<[a-z]+[\s>]|&#x27;|&amp;/, file)
    if (file !== '404.html') assert.ok(md.length >= 500, `${file}: only ${md.length} chars`)
  }
  assert.match(read('404.md'), /\[sitemap\.xml\]\(https:\/\/totono\.xyz\/sitemap\.xml\)/)
})

test('home, about and llms.txt all say "software studio" so agents can classify the site', () => {
  for (const file of ['index.html', 'about.html', 'index.md', 'llms.txt'])
    assert.match(read(file), /software studio/i, file)
  assert.doesNotMatch(
    read('about.md') + read('contact.md'),
    /Toni Tralice/,
    'use the full name in copy',
  )
})

test('nested copies match the flat pages so /about and /about/ serve the same HTML', () => {
  for (const route of ['about', 'contact', 'privacy']) {
    assert.equal(read(`${route}/index.html`), read(`${route}.html`))
  }
})

test('404.html points agents at home, sitemap and llms.txt and is noindex', () => {
  const html = read('404.html')
  assert.match(html, /<h1[\s>]/)
  for (const href of ['/', '/sitemap.xml', '/llms.txt'])
    assert.match(html, new RegExp(`href="${href}"`))
  assert.equal(meta(html, 'name="robots"'), 'noindex')
  assert.doesNotMatch(html, /rel="(canonical|alternate)"/)
})

test('homepage JSON-LD has an Organization with contactPoint and address', () => {
  const json = read('index.html').match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )?.[1]
  const org = JSON.parse(json)['@graph'].find((n) => n['@type'] === 'Organization')
  assert.equal(org.url, 'https://totono.xyz/')
  assert.equal(org.contactPoint['@type'], 'ContactPoint')
  assert.ok(org.contactPoint.email && org.contactPoint.contactType)
  assert.equal(org.founder.name, 'Antonio Tralice')
  assert.ok(org.makesOffer.length >= 4 && org.knowsAbout.length >= 4)
  assert.equal(org.address['@type'], 'PostalAddress')
  assert.ok(org.address.addressCountry)
})

test('sitemap.xml lists every route with a lastmod date', () => {
  const xml = read('sitemap.xml')
  assert.match(
    xml,
    /^<\?xml version="1.0" encoding="UTF-8"\?>\n<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/,
  )
  for (const route of Object.values(pages))
    assert.match(xml, new RegExp(`<loc>https://totono.xyz${route}</loc>`))
  assert.equal(
    xml.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g).length,
    Object.keys(pages).length,
  )
})

test('robots.txt and llms.txt exist and llms.txt says when to use Totono', () => {
  assert.match(read('robots.txt'), /Sitemap: https:\/\/totono.xyz\/sitemap.xml/)
  const llms = read('llms.txt')
  assert.match(llms, /^# Totono\n\n> /)
  assert.match(llms, /## When to use/i)
  assert.match(llms, /toni\.tralice@totono\.xyz/)
  for (const file of ['CNAME', 'logo.png'])
    assert.ok(existsSync(new URL(`../dist/${file}`, import.meta.url)), file)
})
