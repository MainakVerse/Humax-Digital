import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyHumaxSection } from "@/components/why-humax-section"
import { PricingSection } from "@/components/pricing-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { CtaBanner } from "@/components/cta-banner"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StickyCta } from "@/components/sticky-cta"

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-black via-[#0A0A0A] to-black text-white overflow-x-hidden w-full">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyHumaxSection />
      <PricingSection />
      <CaseStudiesSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
      <StickyCta />
    </main>
  )
}
