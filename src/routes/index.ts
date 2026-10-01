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
    title: 'Totono | A nearshore agentic software factory',
    description:
      'A nearshore agentic software factory. Engineers in Argentina and a fleet of agents ship on your codebase; the control plane keeps you in control. Works with Claude Code, Codex, Cursor and Grok.',
    Component: HomePage,
  },
  '/about': {
    title: 'About Totono | A nearshore agentic software factory',
    description:
      'One engineer and a fleet of agents on your codebase, and a control plane to run it. Engineers in Argentina, a US company. Led by Antonio Tralice (YC S20).',
    Component: AboutPage,
  },
  '/contact': {
    title: 'Contact Totono',
    description:
      "Let's build your software factory: email toni.tralice@totono.xyz. We reply within two business days, in English or Spanish.",
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
      'Frequently asked questions about Totono: the nearshore agentic software factory, the control plane, who does the work, and pricing.',
    Component: FAQPage,
  },
  '/disambiguation': {
    title: 'Which Totono is this? | Totono',
    description:
      'Clarifies that this is Totono at totono.xyz (TOTONO LLC, Delaware), a nearshore agentic software factory, not the Japanese housing app or other entities.',
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
