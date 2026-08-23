import type { ComponentType } from 'react'
import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import HomePage from '@/routes/home'
import NotFoundPage from '@/routes/not-found'
import PrivacyPage from '@/routes/privacy'

export const SITE_URL = 'https://totono.xyz'

type Route = { title: string; description: string; Component: ComponentType }

export const routes: Record<string, Route> = {
  '/': {
    title: 'Totono | Tailored software services',
    description:
      'Totono builds tailored software for companies that need reliable systems: web applications, backend services, APIs and technical consulting. TOTONO LLC, Delaware.',
    Component: HomePage,
  },
  '/about': {
    title: 'About Totono',
    description:
      'Totono is a software engineering studio led by Toni Tralice, building custom web applications, backend systems and providing technical consulting.',
    Component: AboutPage,
  },
  '/contact': {
    title: 'Contact Totono',
    description:
      'Reach Totono by email at toni.tralice@totono.xyz to discuss a software project. Replies usually within two business days.',
    Component: ContactPage,
  },
  '/privacy': {
    title: 'Privacy policy | Totono',
    description:
      'How TOTONO LLC handles information collected through totono.xyz and email correspondence.',
    Component: PrivacyPage,
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
