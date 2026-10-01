import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ControlPlaneSection } from '@/components/control-plane-section'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TopNavBar } from '@/components/top-nav-bar'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavBar />

      <main className="flex-grow pt-[77px]">
        <HeroSection />
        <ServicesSection />
        <ControlPlaneSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
