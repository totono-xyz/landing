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
    title: 'Totono | Vetted AI engineers from Argentina',
    description:
      'Totono connects you with vetted AI engineers from Argentina. You talk to Antonio Tralice. He finds the engineers, sets them up on his AI harness, and handles the business side. Zero friction.',
    Component: HomePage,
  },
  '/about': {
    title: 'About Totono | Vetted AI engineers from Argentina',
    description:
      'Totono connects you with vetted AI engineers from Argentina. Led by Antonio Tralice (YC S20). Engineers work on AI tooling he designs and controls. Zero-friction international hiring.',
    Component: AboutPage,
  },
  '/contact': {
    title: 'Contact Totono',
    description:
      'Hire a vetted AI engineer from Argentina: email toni.tralice@totono.xyz. Replies from Antonio Tralice within two business days, in English or Spanish.',
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
      'Frequently asked questions about Totono: what you get, how it works, how to hire a Totono engineer, and how proposals work.',
    Component: FAQPage,
  },
  '/disambiguation': {
    title: 'Which Totono is this? | Totono',
    description:
      'Clarifies that this is Totono at totono.xyz (TOTONO LLC, Delaware), connecting you with vetted AI engineers from Argentina, not the Japanese housing app or other entities.',
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
