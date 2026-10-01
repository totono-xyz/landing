import { Page } from '@/components/page'

const EMAIL = 'toni.tralice@totono.xyz'

export default function ContactPage() {
  return (
    <Page label="Contact" title="Let's build your software factory.">
      <p>
        Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We reply within two business days, in English
        or Spanish.
      </p>

      <h2>Include</h2>
      <ul>
        <li>Your product, and what you want shipped.</li>
        <li>Your stack and tooling: repo host, CI, issue tracker.</li>
        <li>Deadlines or budget, if any.</li>
      </ul>

      <h2>Next</h2>
      <p>A short call, then a written proposal with scope, timeline and price. Both free.</p>

      <p>
        TOTONO LLC, Delaware. Engineers in Argentina, on US Eastern Time. Email is our only official
        channel.
      </p>
    </Page>
  )
}
