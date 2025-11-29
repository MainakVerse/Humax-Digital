import type { Metadata } from "next"
import Link from "next/link"
import { ServicePageLayout } from "@/components/service-page-layout"
import { CheckIcon, ArrowRightIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Wikipedia Page Creation & Authority Building | Humax Digital",
  description:
    "Ethical Wikipedia page creation and reputation management for notable businesses, executives, and organizations.",
}

const notabilityTiers = [
  {
    tier: "Emerging Notable",
    description: "Companies with regional presence and media coverage",
    requirements: ["5+ years in business", "Regional media coverage", "Industry recognition"],
  },
  {
    tier: "Established Notable",
    description: "Companies with national presence and awards",
    requirements: ["10+ years in business", "National media presence", "Industry awards", "Published leadership"],
  },
  {
    tier: "Highly Notable",
    description: "Industry leaders with international recognition",
    requirements: [
      "Public company or major private",
      "International coverage",
      "Multiple third-party sources",
      "Wikipedia-ready citations",
    ],
  },
]

const pricingData = [
  {
    service: "Notability Assessment",
    price: "₹5,000",
    description: "Comprehensive analysis of Wikipedia eligibility",
  },
  {
    service: "Draft Article Creation",
    price: "₹25,000",
    description: "Research, writing, and source compilation",
  },
  {
    service: "Full Page Creation",
    price: "₹30,000",
    description: "End-to-end Wikipedia page creation and submission",
  },
  {
    service: "Executive Biography",
    price: "₹40,000",
    description: "Wikipedia page for notable individuals/founders",
  },
  {
    service: "Monitoring & Maintenance",
    price: "₹10,000/year",
    description: "Ongoing page protection and updates",
  },
]

const process = [
  { step: "01", title: "Notability Review", description: "Assess eligibility based on Wikipedia guidelines" },
  { step: "02", title: "Source Gathering", description: "Compile reliable third-party references" },
  { step: "03", title: "Content Drafting", description: "Write neutral, encyclopedic content" },
  { step: "04", title: "Submission", description: "Submit through proper Wikipedia channels" },
  { step: "05", title: "Review Management", description: "Address editor feedback professionally" },
]

export default function WikipediaPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <section className="bg-[#0052CC] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] text-balance">
            Wikipedia Page Creation & Authority Building
          </h1>
          <p className="mt-4 text-lg text-[#FFFFFF]/90 max-w-2xl">
            Ethical, compliant Wikipedia presence for notable organizations and executives.
          </p>
        </div>
      </section>

      {/* Notability Tiers */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#002A66] mb-8">Notability Assessment</h2>
          <p className="text-[#4A5568] mb-8 max-w-2xl">
            Wikipedia has strict notability guidelines. We evaluate your eligibility before any work begins to ensure
            successful page creation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {notabilityTiers.map((tier) => (
              <div key={tier.tier} className="border border-[#D1D5DB] p-6">
                <h3 className="text-lg font-bold text-[#0052CC] mb-2">{tier.tier}</h3>
                <p className="text-sm text-[#4A5568] mb-4">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-sm text-[#002A66]">
                      <CheckIcon className="w-4 h-4 text-[#0052CC]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#002A66] mb-8 text-center">Service Pricing</h2>
          <div className="max-w-3xl mx-auto border border-[#D1D5DB]">
            <div className="grid grid-cols-3 bg-[#002A66] text-[#FFFFFF]">
              <div className="p-4 font-semibold text-sm">Service</div>
              <div className="p-4 font-semibold text-sm text-center border-l border-[#FFFFFF]/20">Price</div>
              <div className="p-4 font-semibold text-sm border-l border-[#FFFFFF]/20">Description</div>
            </div>
            {pricingData.map((item, index) => (
              <div
                key={item.service}
                className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F7FA]"} border-t border-[#D1D5DB]`}
              >
                <div className="p-4 text-[#002A66] font-medium text-sm">{item.service}</div>
                <div className="p-4 text-[#0052CC] font-bold text-sm text-center border-l border-[#D1D5DB]">
                  {item.price}
                </div>
                <div className="p-4 text-[#4A5568] text-sm border-l border-[#D1D5DB]">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#002A66] mb-8">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-4xl font-bold text-[#0052CC]/20 mb-2">{item.step}</div>
                <h3 className="text-base font-bold text-[#002A66] mb-1">{item.title}</h3>
                <p className="text-sm text-[#4A5568]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="py-12 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[#0052CC] pl-6">
            <h3 className="text-lg font-bold text-[#002A66] mb-2">Ethical Compliance</h3>
            <p className="text-sm text-[#4A5568]">
              We follow all Wikipedia guidelines and policies. We do not create pages for non-notable subjects, engage
              in paid editing without disclosure, or use deceptive practices. Our approach is transparent and built for
              long-term page stability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#002A66]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-4">Check Your Wikipedia Eligibility</h2>
          <p className="text-[#FFFFFF]/80 mb-8 max-w-xl mx-auto">
            Start with a free notability consultation to understand your options.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#0052CC] font-bold hover:bg-[#F5F7FA] transition-colors duration-150"
          >
            Request Assessment
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
