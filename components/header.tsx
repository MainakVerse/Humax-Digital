"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, XIcon, ChevronDownIcon } from "./icons"

const serviceItems = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Wikipedia Services", href: "/services/wikipedia" },
  { label: "SEO & Marketing", href: "/services/seo-marketing" },
  { label: "AI Automation", href: "/services/ai-automation" },
]

const navItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] border-b border-[#D1D5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-[#0052CC] flex items-center justify-center">
              <span className="text-[#FFFFFF] font-bold text-lg">H</span>
            </div>
            <span className="text-[#002A66] font-bold text-xl tracking-tight">Humax Digital</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            <Link
              href="/"
              className="text-[#002A66] text-sm font-medium hover:text-[#0052CC] transition-colors duration-150"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[#002A66] text-sm font-medium hover:text-[#0052CC] transition-colors duration-150"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-150 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-[#FFFFFF] border border-[#D1D5DB] shadow-lg min-w-[240px]">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-[#002A66] hover:bg-[#0052CC] hover:text-[#FFFFFF] transition-colors duration-150 border-b border-[#E5E7EB] last:border-b-0"
                      >
                        {service.label}
                      </Link>
                    ))}
                    <Link
                      href="/#services"
                      className="block px-4 py-3 text-sm font-semibold text-[#0052CC] hover:bg-[#0052CC] hover:text-[#FFFFFF] transition-colors duration-150"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#002A66] text-sm font-medium hover:text-[#0052CC] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/#contact"
              className="px-5 py-2 bg-[#0052CC] text-[#FFFFFF] text-sm font-semibold hover:bg-[#002A66] transition-colors duration-150"
            >
              Get Proposal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-[#002A66]" />
            ) : (
              <MenuIcon className="w-6 h-6 text-[#002A66]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#D1D5DB]">
          <nav className="px-4 py-4 flex flex-col gap-2">
            <Link
              href="/"
              className="text-[#002A66] text-base font-medium hover:text-[#0052CC] transition-colors duration-150 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-[#002A66] text-base font-medium hover:text-[#0052CC] transition-colors duration-150 py-2"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-150 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 border-l-2 border-[#0052CC] ml-2 mt-2 flex flex-col gap-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="text-[#002A66] text-sm hover:text-[#0052CC] transition-colors duration-150 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                  <Link
                    href="/#services"
                    className="text-[#0052CC] text-sm font-semibold hover:text-[#002A66] transition-colors duration-150 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#002A66] text-base font-medium hover:text-[#0052CC] transition-colors duration-150 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="px-5 py-3 bg-[#0052CC] text-[#FFFFFF] text-sm font-semibold text-center hover:bg-[#002A66] transition-colors duration-150 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Proposal
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
