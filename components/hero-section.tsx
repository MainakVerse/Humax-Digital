"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const handleScroll = () => {
    const section = document.querySelector("#services")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative bg-[#0052CC] min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

      {/* Background Pattern - Subtle grid lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight text-balance">
            Engineering Digital Growth for High-Performance Businesses
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#FFFFFF]/90 leading-relaxed max-w-3xl mx-auto">
            Smart AI Solutions, Web Development, and Data-Driven Digital Marketing — Delivered with Precision.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-[#FFFFFF] text-[#0052CC] text-base font-bold hover:bg-[#F5F7FA] transition-colors duration-150"
            >
              Get Proposal
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] text-base font-bold hover:bg-[#FFFFFF]/10 transition-colors duration-150"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={handleScroll}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white animate-bounce focus:outline-none"
        aria-label="Scroll Down"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </button>

    </section>
  )
}
