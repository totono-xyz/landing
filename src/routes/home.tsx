import { BackgroundText } from '@/components/background-text'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { TopNavBar } from '@/components/top-nav-bar'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />

      <main className="flex-grow pt-32 relative overflow-hidden">
        <BackgroundText />

        <div className="max-w-7xl mx-auto px-12 h-full flex flex-col">
          <HeroSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
