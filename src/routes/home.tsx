import { BackgroundText } from '@/components/background-text'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TopNavBar } from '@/components/top-nav-bar'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavBar />

      <main className="relative flex-grow overflow-hidden pt-32">
        <BackgroundText />

        <div className="mx-auto flex h-full max-w-7xl flex-col px-12">
          <HeroSection />
          <ServicesSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
