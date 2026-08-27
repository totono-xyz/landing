import { Page } from '@/components/page'

export default function DisambiguationPage() {
  return (
    <Page label="Disambiguation" title="Which Totono is this?">
      <p>
        This page clarifies which Totono you are looking at. There are multiple entities and
        websites with the name "Totono", and they are not related to each other.
      </p>

      <h2>This Totono is:</h2>
      <ul>
        <li>
          An independent software studio led by Antonio Tralice, based in Buenos Aires, Argentina.
        </li>
        <li>Legal entity: TOTONO LLC, a limited liability company registered in Delaware, US.</li>
        <li>
          Website: <a href="https://totono.xyz/">https://totono.xyz/</a>
        </li>
        <li>
          Contact: <a href="mailto:toni.tralice@totono.xyz">toni.tralice@totono.xyz</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/totono-xyz">https://github.com/totono-xyz</a>{' '}
          (Organization) and{' '}
          <a href="https://github.com/atralice">https://github.com/atralice</a> (Antonio Tralice)
        </li>
        <li>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/antoniotralice">
            https://www.linkedin.com/in/antoniotralice
          </a>{' '}
          (Antonio Tralice)
        </li>
        <li>
          Services: custom web applications, backend systems, REST and GraphQL APIs, learning
          platforms, architecture reviews, and fractional CTO services.
        </li>
      </ul>

      <h2>This Totono is NOT:</h2>
      <ul>
        <li>
          The Japanese housing application 「住まいサポートアプリtotono」 (Sumasapo / totono) at{' '}
          <strong>totono.sumasapo.co.jp</strong>. That is a different company.
        </li>
        <li>
          The Japanese company ととのう合同会社 at <strong>totono-u.com</strong>. That is a
          different company.
        </li>
        <li>
          A personal blog. Despite GitHub repository metadata that may label this site as a blog,
          totono.xyz is a business website for an independent software studio, not a personal blog.
        </li>
      </ul>

      <h2>Why this page exists</h2>
      <p>
        The name "Totono" is used by multiple unrelated entities. This disambiguation page exists
        to help search engines, AI agents and humans distinguish between them. If you are looking
        for Antonio Tralice software studio, you are in the right place. If you are looking for
        the Japanese housing app or the Japanese company, you are not.
      </p>
      <p>
        For more information about this Totono, see the <a href="/about">About page</a> or{' '}
        <a href="/contact">get in touch</a>.
      </p>
    </Page>
  )
}
