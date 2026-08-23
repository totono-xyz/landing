// Cloudflare Worker for totono.xyz: serves the markdown sibling of a page when the client
// prefers `text/markdown` (acceptmarkdown.com), adds `Vary: Accept`, advertises the sibling
// with a `Link` header and returns 406 when nothing we produce is acceptable.
// Deploy with `npm run deploy:worker` (needs a Cloudflare login via wrangler).

const PRODUCES = ['text/html', 'text/markdown']
const PASSTHROUGH = /\.(?:css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|xml|txt|json|md)$/i

/** RFC 9110 §12.5.1: most specific matching range wins, then highest q, then client order. */
export function preferredType(header, produces = PRODUCES) {
  if (!header) return produces[0]
  const entries = header
    .split(',')
    .map((raw, position) => {
      const [type, ...params] = raw.split(';').map((s) => s.trim().toLowerCase())
      const q = Number(params.find((p) => p.startsWith('q='))?.slice(2) ?? 1)
      const specificity = type === '*/*' ? 0 : type.endsWith('/*') ? 1 : 2
      return { type, q: Number.isNaN(q) ? 1 : q, specificity, position }
    })
    .filter((e) => e.type)
  if (!entries.length) return produces[0]

  let best = null
  for (const candidate of produces) {
    const match = entries
      .filter(
        (e) =>
          e.type === '*/*' ||
          e.type === candidate ||
          (e.type.endsWith('/*') && candidate.startsWith(e.type.slice(0, -1))),
      )
      .sort((a, b) => b.specificity - a.specificity || a.position - b.position)[0]
    if (!match || match.q <= 0) continue
    if (!best || match.q > best.q || (match.q === best.q && match.position < best.position)) {
      best = { ...match, candidate }
    }
  }
  return best?.candidate ?? null
}

function withVaryAccept(response) {
  const res = new Response(response.body, response)
  const vary = res.headers.get('vary')
  if (!vary) res.headers.set('Vary', 'Accept')
  else if (
    !vary
      .toLowerCase()
      .split(',')
      .some((v) => v.trim() === 'accept')
  )
    res.headers.set('Vary', `${vary}, Accept`)
  return res
}

const notAcceptable = () =>
  withVaryAccept(
    new Response(`Not Acceptable\n\nThis resource is available as:\n- ${PRODUCES.join('\n- ')}\n`, {
      status: 406,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    }),
  )

/** `/` → `/index.md`, `/about`, `/about/`, `/about.html` → `/about.md` */
export const markdownPath = (pathname) =>
  `/${pathname.replace(/(\/|\.html)$/, '').replace(/^\//, '') || 'index'}.md`

export default {
  async fetch(request) {
    const url = new URL(request.url)
    if (PASSTHROUGH.test(url.pathname)) return fetch(request)

    const accept = request.headers.get('accept')
    const chosen = preferredType(accept)
    if (chosen === null) return notAcceptable()

    if (chosen === 'text/markdown') {
      let res = await fetch(new Request(new URL(markdownPath(url.pathname), url), request))
      // Unknown page: answer with the markdown 404 body so agents can recover.
      if (res.status === 404) {
        res = new Response((await fetch(new URL('/404.md', url))).body, { status: 404 })
      }
      res = withVaryAccept(res)
      res.headers.set('Content-Type', 'text/markdown; charset=utf-8')
      return res
    }

    const res = withVaryAccept(await fetch(request))
    if (res.ok && res.headers.get('content-type')?.includes('text/html')) {
      res.headers.set(
        'Link',
        `<${markdownPath(url.pathname)}>; rel="alternate"; type="text/markdown"`,
      )
    }
    return res
  },
}
