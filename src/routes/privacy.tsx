import { Page } from '@/components/page'

export default function PrivacyPage() {
  return (
    <Page label="Privacy" title="Privacy policy.">
      <p>
        This policy describes what information TOTONO LLC ("Totono", "we") collects when you visit
        totono.xyz or contact us, and how that information is used. Last updated on 23 August 2026.
      </p>

      <h2>Information we collect on this website</h2>
      <p>
        totono.xyz is a static website. It does not set cookies, does not use analytics or
        advertising trackers, and does not require an account. We do not collect personal
        information through the site itself.
      </p>
      <p>
        The site is hosted on GitHub Pages and served through Cloudflare. Like most hosting
        providers, they may keep standard server logs (IP address, user agent, requested URL and
        timestamp) for security and operational purposes, under their own privacy policies. Web
        fonts are loaded from Google Fonts, which receives your browser's request for the font
        files.
      </p>

      <h2>Information you send us</h2>
      <p>
        When you email us, we keep your message and contact details for as long as needed to respond
        to you and, if we work together, for the duration of the engagement and the period required
        by applicable accounting and legal obligations. We do not sell or share your information
        with third parties, except for service providers that process email and documents on our
        behalf.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us at any time to access, correct or delete the personal information we hold
        about you. Send your request to{' '}
        <a href="mailto:toni.tralice@totono.xyz">toni.tralice@totono.xyz</a> and we will respond
        within thirty days.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the updated version is published on this page with a new "last
        updated" date.
      </p>
    </Page>
  )
}
