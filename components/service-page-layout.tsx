import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { ContactSection } from "./contact-section"

interface ServicePageLayoutProps {
  children: React.ReactNode
}

export function ServicePageLayout({ children }: ServicePageLayoutProps) {
  return (
    <main>
      <Header />
      {children}
      <ContactSection />
      <Footer />
    </main>
  )
}
