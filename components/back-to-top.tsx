"use client"

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const hero = document.querySelector("#hero")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // show button only when Hero is NOT visible AT ALL
        setShowButton(!entry.isIntersecting)
      },
      { threshold: 0 } // Trigger as soon as hero leaves viewport
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-2 sm:right-6 right-42 z-50 p-3 rounded-full transition-all duration-300 bg-[#ffffff] text-black shadow-xl hover:bg-[#11b3cc] ${
  showButton
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 translate-y-6 pointer-events-none"
}`}

    >
      <ChevronUp size={24} strokeWidth={2} />
    </button>
  )
}
