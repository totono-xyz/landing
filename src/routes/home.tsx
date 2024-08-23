import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="TOTONO"
        content="Bringing your ideas to life with tailored software services. Let's build something great together."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
