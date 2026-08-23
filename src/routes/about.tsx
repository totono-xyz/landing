import { Page } from '@/components/page'

export default function AboutPage() {
  return (
    <Page label="About" title="Software built to last.">
      <p>
        Totono is a software engineering studio operated by TOTONO LLC, a limited liability company
        registered in the state of Delaware, United States. We design and build tailored software
        for companies that need dependable systems rather than one-size-fits-all products.
      </p>
      <p>
        The studio is led by Toni Tralice, a software engineer with more than a decade of experience
        building web platforms, backend services and developer tooling for startups and established
        businesses. Every engagement is handled directly by the people who write the code: no
        account managers, no hand-offs, no surprises.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Custom web applications, from first prototype to production.</li>
        <li>Backend systems, APIs and integrations with third-party services.</li>
        <li>System architecture reviews and technical due diligence.</li>
        <li>Fractional engineering leadership for teams that need senior guidance.</li>
      </ul>

      <h2>How we work</h2>
      <p>
        We favour small, well-defined projects with clear outcomes. Work is delivered in short
        iterations with working software at the end of each one, so you can evaluate progress and
        change direction early. We focus on reliability, structural integrity and the technical
        precision your vision deserves.
      </p>
      <p>
        If that sounds like what you need, <a href="/contact">get in touch</a>.
      </p>
    </Page>
  )
}
