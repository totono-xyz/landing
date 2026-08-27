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
    title: 'Totono | Independent software studio',
    description:
      'Totono is an independent software studio building custom web applications, backend systems, APIs and learning platforms. Led by Antonio Tralice. Remote, English and Spanish.',
    Component: HomePage,
  },
  '/about': {
    title: 'About Totono | Software studio led by Antonio Tralice',
    description:
      'Totono is a software studio led by Antonio Tralice (YC S20 alumni) building custom web applications, backend systems, learning platforms and providing fractional CTO services.',
    Component: AboutPage,
  },
  '/contact': {
    title: 'Contact Totono',
    description:
      'Hire Totono for your next software project: email toni.tralice@totono.xyz. Replies from Antonio Tralice within two business days, in English or Spanish.',
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
      'Frequently asked questions about Totono: what is it, who leads it, what services are offered, how to hire, and how proposals work.',
    Component: FAQPage,
  },
  '/disambiguation': {
    title: 'Which Totono is this? | Totono',
    description:
      'Clarifies that this is Antonio Tralice software studio at totono.xyz (TOTONO LLC), not the Japanese housing app totono.sumasapo.co.jp or totono-u.com.',
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
