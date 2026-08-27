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
  'faq.html': '/faq',
  'disambiguation.html': '/disambiguation',
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

test('home, about and llms.txt all say "Argentinian" so agents can classify the site', () => {
  for (const file of ['index.html', 'about.html', 'index.md', 'llms.txt'])
    assert.match(read(file), /Argentinian/i, file)
  assert.doesNotMatch(
    read('about.md') + read('contact.md'),
    /Toni Tralice/,
    'use the full name in copy',
  )
})

test('nested copies match the flat pages so /about and /about/ serve the same HTML', () => {
  for (const route of ['about', 'contact', 'privacy', 'faq', 'disambiguation']) {
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
  const graph = JSON.parse(json)['@graph']
  const org = graph.find((n) => n['@type'] === 'Organization' || (Array.isArray(n['@type']) && n['@type'].includes('Organization')))
  assert.equal(org.url, 'https://totono.xyz/')
  assert.ok(Array.isArray(org['@type']) && org['@type'].includes('ProfessionalService'), 'should include ProfessionalService type')
  assert.equal(org.contactPoint['@type'], 'ContactPoint')
  assert.ok(org.contactPoint.email && org.contactPoint.contactType)
  assert.equal(org.founder.name, 'Antonio Tralice')
  assert.ok(org.founder.sameAs.includes('https://github.com/atralice'), 'founder should have GitHub sameAs')
  assert.ok(org.founder.sameAs.includes('https://www.linkedin.com/in/antoniotralice'), 'founder should have LinkedIn sameAs')
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
  const robots = read('robots.txt')
  assert.match(robots, /Sitemap: https:\/\/totono.xyz\/sitemap.xml/)
  assert.match(robots, /User-agent: GPTBot/)
  assert.match(robots, /User-agent: ClaudeBot/)
  assert.match(robots, /User-agent: Google-Extended/)
  const llms = read('llms.txt')
  assert.match(llms, /^# Totono\n\n> /)
  assert.match(llms, /## When to use/i)
  assert.match(llms, /toni\.tralice@totono\.xyz/)
  assert.match(llms, /llms-full\.txt/, 'llms.txt should link to llms-full.txt')
  for (const file of ['CNAME', 'logo.png'])
    assert.ok(existsSync(new URL(`../dist/${file}`, import.meta.url)), file)
})

test('llms-full.txt exists with expanded content, FAQ and disambiguation', () => {
  const full = read('llms-full.txt')
  assert.match(full, /^# Totono — Full Agent Briefing/)
  assert.match(full, /## Entity facts/)
  assert.match(full, /## Frequently asked questions/)
  assert.match(full, /## Disambiguation/)
  assert.match(full, /TOTONO LLC, Delaware/)
  assert.match(full, /Antonio Tralice/)
  assert.ok(full.length >= 2000, `llms-full.txt should be comprehensive: ${full.length} chars`)
})

test('FAQ page has FAQPage JSON-LD schema with questions', () => {
  const html = read('faq.html')
  const matches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
  assert.ok(matches && matches.length > 0, 'FAQ page should have JSON-LD')
  const faqSchema = matches.map(m => {
    const json = m.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]
    return json ? JSON.parse(json) : null
  }).find(s => s && s['@type'] === 'FAQPage')
  assert.ok(faqSchema, 'should have FAQPage schema')
  assert.equal(faqSchema['@type'], 'FAQPage')
  assert.ok(Array.isArray(faqSchema.mainEntity), 'FAQPage should have mainEntity array')
  assert.ok(faqSchema.mainEntity.length >= 5, `should have at least 5 questions, got ${faqSchema.mainEntity.length}`)
  for (const item of faqSchema.mainEntity) {
    assert.equal(item['@type'], 'Question')
    assert.ok(item.name, 'each question should have a name')
    assert.equal(item.acceptedAnswer['@type'], 'Answer')
    assert.ok(item.acceptedAnswer.text, 'each answer should have text')
  }
})

test('disambiguation page clarifies this is Antonio Tralice studio, not other Totonos', () => {
  const html = read('disambiguation.html')
  assert.match(html, /Antonio Tralice/)
  assert.match(html, /TOTONO LLC/)
  assert.match(html, /totono\.xyz/)
  assert.match(html, /sumasapo\.co\.jp/, 'should mention the Japanese housing app')
  assert.match(html, /totono-u\.com/, 'should mention the Japanese company')
})
