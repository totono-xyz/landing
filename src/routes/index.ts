import type { ComponentType } from 'react'
import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import DisambiguationPage from '@/routes/disambiguation'
import FAQPage from '@/routes/faq'
import HomePage from '@/routes/home'
import NotFoundPage from '@/routes/not-found'
import PrivacyPage from '@/routes/privacy'

export const SITE_URL = 'https://totono.xyz'

type Route = { title: string; description: string; Component: ComponentType }

export const routes: Record<string, Route> = {
  '/': {
    title: 'Totono | An agentic software factory, and the harness to control it',
    description:
      'Totono connects to your codebase and tooling, and agents start shipping. You get the harness to control them: agents understand the code, developers control what they can do, stakeholders see the state of the app.',
    Component: HomePage,
  },
  '/about': {
    title: 'About Totono | Agentic software factory',
    description:
      'Totono is an agentic software factory led by Antonio Tralice (YC S20). Agents ship on your codebase; the harness keeps developers in control and stakeholders informed.',
    Component: AboutPage,
  },
  '/contact': {
    title: 'Contact Totono',
    description:
      'Get agents shipping on your codebase: email toni.tralice@totono.xyz. Totono will reply, usually within two business days, in English or Spanish.',
    Component: ContactPage,
  },
  '/privacy': {
    title: 'Privacy policy | Totono',
    description:
      'How TOTONO LLC handles information collected through totono.xyz and email correspondence.',
    Component: PrivacyPage,
  },
  '/faq': {
    title: 'FAQ | Totono',
    description:
      'Frequently asked questions about Totono: the agentic software factory, the harness, how fast we start, and how proposals work.',
    Component: FAQPage,
  },
  '/disambiguation': {
    title: 'Which Totono is this? | Totono',
    description:
      'Clarifies that this is Totono at totono.xyz (TOTONO LLC, Delaware), an agentic software factory, not the Japanese housing app or other entities.',
    Component: DisambiguationPage,
  },
}

export const notFound: Route = {
  title: 'Page not found | Totono',
  description: 'This page does not exist. Links to the home page, sitemap and llms.txt.',
  Component: NotFoundPage,
}

/** "/about/", "/about.html" and "/about" are the same route. */
export function normalizePath(pathname: string) {
  return pathname.replace(/(\/|\.html)$/, '') || '/'
}
