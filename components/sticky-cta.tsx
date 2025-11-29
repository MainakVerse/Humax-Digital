"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0052CC] border-t-2 border-[#002A66] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[#FFFFFF] font-medium text-sm sm:text-base hidden sm:block">
            Transform your business with enterprise-grade digital solutions
          </p>
          <p className="text-[#FFFFFF] font-medium text-sm sm:hidden">Ready to grow?</p>
          <Link
            href="/#contact"
            className="flex-shrink-0 px-6 py-2 bg-[#FFFFFF] text-[#0052CC] text-sm font-bold hover:bg-[#F5F7FA] transition-colors duration-150"
          >
            Get Proposal
          </Link>
        </div>
      </div>
    </div>
  )
}
