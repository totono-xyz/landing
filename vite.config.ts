import react from '@vitejs/plugin-react'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer, defineConfig, type Plugin } from 'vite'

const OUT = path.resolve(__dirname, 'dist')

const setMeta = (html: string, selector: string, value: string) =>
  html.replace(new RegExp(`(<meta ${selector} content=")[^"]*(")`), `$1${value}$2`)

/** Renders every route into static HTML so crawlers get real content without JavaScript. */
function prerender(): Plugin {
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

        const page = (
          route: string,
          { title, description }: { title: string; description: string },
        ) => {
          const url = SITE_URL + route
          let html = template
            .replace(
              '<div id="root"></div>',
              `<div id="root">${renderToString(createElement(App, { path: route }))}</div>`,
            )
            .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
            .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
          html = setMeta(html, 'name="description"', description)
          html = setMeta(html, 'property="og:url"', url)
          html = setMeta(html, 'property="og:title"', title)
          return setMeta(html, 'property="og:description"', description)
        }

        const write = (file: string, html: string) => {
          mkdirSync(path.dirname(path.join(OUT, file)), { recursive: true })
          writeFileSync(path.join(OUT, file), html)
        }

        for (const [route, meta] of Object.entries(routes)) {
          if (route === '/') write('index.html', page('/', meta))
          else {
            // GitHub Pages serves both `/about` (about.html) and `/about/` (about/index.html).
            write(`${route.slice(1)}.html`, page(route, meta))
            write(`${route.slice(1)}/index.html`, page(route, meta))
          }
        }
        write(
          '404.html',
          page('/404', notFound)
            .replace(/ *<link rel="canonical"[^>]*>\n/, '')
            .replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'),
        )

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

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), prerender()],
})
