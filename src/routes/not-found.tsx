import { Page } from '@/components/page'

export default function NotFoundPage() {
  return (
    <Page label="Error 404" title="Page not found.">
      <p>There is no page at this address. Where to look next:</p>
      <ul>
        <li>
          <a href="/">Home</a>: what Totono does and how to get in touch.
        </li>
        <li>
          <a href="/about">About</a>, <a href="/contact">Contact</a>, <a href="/privacy">Privacy</a>
        </li>
        <li>
          <a href="/sitemap.xml">sitemap.xml</a>: every indexable URL on this site.
        </li>
        <li>
          <a href="/llms.txt">llms.txt</a>: a short guide to this site for AI agents.
        </li>
      </ul>
    </Page>
  )
}
