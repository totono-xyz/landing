import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer, type Plugin } from 'vite'

const OUT = path.resolve(__dirname, 'dist')

const setMeta = (html: string, selector: string, value: string) =>
  html.replace(new RegExp(`(<meta ${selector} content=")[^"]*(")`), `$1${value}$2`)

const decode = (s: string) =>
  s
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;| /g, ' ')
    .replace(/&amp;/g, '&')

/** Removes every `aria-hidden="true"` element and its subtree (decorative marquee, icon ligatures). */
function dropHidden(html: string): string {
  const open = html.match(/<([a-z0-9]+) aria-hidden="true"/)
  if (!open || open.index === undefined) return html
  const tag = open[1]
  let depth = 0
  for (const m of html.slice(open.index).matchAll(new RegExp(`<${tag}\\b|</${tag}>`, 'g'))) {
    depth += m[0].startsWith('</') ? -1 : 1
    if (depth === 0) {
      const end = open.index + (m.index as number) + m[0].length
      return dropHidden(html.slice(0, open.index) + html.slice(end))
    }
  }
  return html
}

/** Converts the small HTML vocabulary our pages use (headings, paragraphs, lists, links) to markdown. */
export function toMarkdown(html: string, base: string): string {
  const inner = (s: string) =>
    s
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  const block: Record<string, (t: string) => string> = {
    h1: (t) => `# ${t}\n\n`,
    h2: (t) => `## ${t}\n\n`,
    p: (t) => `${t}\n\n`,
    li: (t) => `- ${t}\n`,
    dt: (t) => `- **${t}**: `,
    dd: (t) => t,
  }
  const md = dropHidden(html)
    .replace(
      /<a [^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g,
      (_, href, t) => `[${inner(t)}](${new URL(href, base)})`,
    )
    .replace(/<(h1|h2|p|li|dt|dd)\b[^>]*>([\s\S]*?)<\/\1>/g, (_, tag, t) => block[tag](inner(t)))
    .replace(/<\/(ul|dl|section|span|div)>/g, '\n')
    .replace(/<[^>]+>/g, '')
  return (
    decode(md)
      .split('\n')
      .map((line) => line.trim())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim() + '\n'
  )
}

/** Renders every route into static HTML (plus a markdown sibling) so crawlers get real content without JavaScript. */
export function prerender(): Plugin {
  return {
    name: 'prerender',
    apply: 'build',
    async closeBundle() {
      const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
      try {
        const [{ default: App }, { routes, notFound, SITE_URL }] = await Promise.all([
          server.ssrLoadModule('/app.tsx'),
          server.ssrLoadModule('/routes/index.ts'),
        ])
        const template = readFileSync(path.join(OUT, 'index.html'), 'utf8')

        const write = (file: string, content: string) => {
          mkdirSync(path.dirname(path.join(OUT, file)), { recursive: true })
          writeFileSync(path.join(OUT, file), content)
        }

        const render = (
          route: string,
          name: string,
          { title, description }: { title: string; description: string },
        ) => {
          const url = SITE_URL + route
          const body = renderToString(createElement(App, { path: route }))
          let html = template
            .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
            .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
            .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
            .replace(
              /(<link rel="alternate" type="text\/markdown" href=")[^"]*(")/,
              `$1${SITE_URL}/${name}.md$2`,
            )
          html = setMeta(html, 'name="description"', description)
          html = setMeta(html, 'property="og:url"', url)
          html = setMeta(html, 'property="og:title"', title)
          html = setMeta(html, 'property="og:description"', description)
          const main = body.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? body
          return { html, md: toMarkdown(main, url) }
        }

        for (const [route, meta] of Object.entries(routes)) {
          const name = route === '/' ? 'index' : route.slice(1)
          const { html, md } = render(route, name, meta)
          write(`${name}.html`, html)
          // GitHub Pages serves both `/about` (about.html) and `/about/` (about/index.html).
          if (route !== '/') write(`${name}/index.html`, html)
          write(`${name}.md`, md)
        }

        const { html, md } = render('/404', '404', notFound)
        write(
          '404.html',
          html
            .replace(/ *<link rel="(canonical|alternate)"[^>]*>\n/g, '')
            .replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'),
        )
        write('404.md', md)

        const lastmod = new Date().toISOString().slice(0, 10)
        const urls = Object.keys(routes).map(
          (route) => `  <url><loc>${SITE_URL}${route}</loc><lastmod>${lastmod}</lastmod></url>`,
        )
        write(
          'sitemap.xml',
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
        )
      } finally {
        await server.close()
      }
    },
  }
}
