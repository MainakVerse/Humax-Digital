import Link from "next/link"
import { ArrowRightIcon, DownloadIcon } from "./icons"

const pricingData = [
  {
    service: "Business Websites",
    price: "₹15,000",
    href: "/services/web-development#pricing",
  },
  {
    service: "Wikipedia Page Creation",
    price: "₹30,000",
    href: "/services/wikipedia#pricing",
  },
  {
    service: "On-Page SEO Campaign",
    price: "₹5,000 / month",
    href: "/services/seo-marketing#pricing",
  },
  {
    service: "RAG-Enabled AI Chatbot",
    price: "₹30,000",
    href: "/services/ai-automation#pricing",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002A66] text-balance">Quick Pricing Preview</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            Transparent pricing for enterprise-grade solutions
          </p>
        </div>

        {/* Pricing Table */}
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#D1D5DB]">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-[#002A66] text-[#FFFFFF]">
              <div className="p-4 font-semibold text-sm">Service</div>
              <div className="p-4 font-semibold text-sm text-center border-l border-[#FFFFFF]/20">Starting Price</div>
              <div className="p-4 font-semibold text-sm text-center border-l border-[#FFFFFF]/20">Details</div>
            </div>
            {/* Table Body */}
            {pricingData.map((item, index) => (
              <div
                key={item.service}
                className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F7FA]"} border-t border-[#D1D5DB]`}
              >
                <div className="p-4 text-[#002A66] font-medium text-sm">{item.service}</div>
                <div className="p-4 text-[#0052CC] font-bold text-sm text-center border-l border-[#D1D5DB]">
                  {item.price}
                </div>
                <div className="p-4 text-center border-l border-[#D1D5DB]">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[#0052CC] text-sm font-semibold hover:underline"
                  >
                    Full Pricing
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0052CC] text-[#FFFFFF] font-bold hover:bg-[#002A66] transition-colors duration-150"
            >
              Get Proposal
            </Link>
            <Link
              href="/pricing-sheet.pdf"
              className="inline-flex items-center gap-2 px-6 py-4 border-2 border-[#0052CC] text-[#0052CC] font-semibold hover:bg-[#0052CC] hover:text-[#FFFFFF] transition-colors duration-150"
            >
              <DownloadIcon className="w-5 h-5" />
              Download Pricing Sheet
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
