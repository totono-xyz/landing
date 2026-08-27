import { Page } from '@/components/page'

const EMAIL = 'toni.tralice@totono.xyz'

export default function ContactPage() {
  return (
    <Page label="Contact" title="Let's talk about your project.">
      <p>
        The fastest way to reach Totono is by email. Write to{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and you will get a reply from Antonio Tralice,
        usually within two business days. We read and reply in English and Spanish.
      </p>

      <h2>What to include</h2>
      <ul>
        <li>A short description of what you need built.</li>
        <li>Your current stack, if there is one, and who maintains it today.</li>
        <li>Any deadlines, budget range or constraints we should know about.</li>
        <li>The best way and time to reach you for a follow-up call.</li>
      </ul>

      <h2>What happens next</h2>
      <p>
        After a first exchange over email, Antonio usually schedules a short call to understand the
        problem in more depth. From there you receive a written proposal with scope, timeline and
        pricing. There is no cost or obligation for this initial conversation.
      </p>

      <h2>Business details</h2>
      <p>
        TOTONO LLC is a Delaware limited liability company. We work remotely with clients across the
        Americas and Europe, on US Eastern Time. Email is the only official channel; we do not use
        contact forms or social media direct messages for business enquiries.
      </p>
    </Page>
  )
}
