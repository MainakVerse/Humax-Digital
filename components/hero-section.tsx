import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-[#0052CC] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 justify-center">
            <div className="flex items-center gap-2 text-[#FFFFFF]/80 text-sm">
              <div className="w-8 h-8 border border-[#FFFFFF]/40 flex items-center justify-center">
                <span className="text-xs font-bold">ISO</span>
              </div>
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-[#FFFFFF]/80 text-sm">
              <div className="w-8 h-8 border border-[#FFFFFF]/40 flex items-center justify-center">
                <span className="text-xs font-bold">AWS</span>
              </div>
              <span>AWS Partner</span>
            </div>
            <div className="flex items-center gap-2 text-[#FFFFFF]/80 text-sm">
              <div className="w-8 h-8 border border-[#FFFFFF]/40 flex items-center justify-center">
                <span className="text-xs font-bold">GCP</span>
              </div>
              <span>Google Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
