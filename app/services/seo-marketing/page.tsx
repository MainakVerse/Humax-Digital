import type { Metadata } from "next"
import Link from "next/link"
import { ServicePageLayout } from "@/components/service-page-layout"
import { CheckIcon, ArrowRightIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "SEO & Digital Marketing | Humax Digital",
  description: "Data-driven SEO, content marketing, and growth strategies for measurable business results.",
}

const services = [
  {
    title: "On-Page SEO",
    items: [
      "Technical audit",
      "Keyword optimization",
      "Meta tag optimization",
      "Schema markup",
      "Site speed optimization",
    ],
  },
  {
    title: "Content Marketing",
    items: ["Content strategy", "Blog writing", "Thought leadership", "Case studies", "Whitepapers"],
  },
  {
    title: "Growth Marketing",
    items: ["Conversion optimization", "A/B testing", "Landing page design", "Email campaigns", "Analytics setup"],
  },
]

const pricingPlans = [
  {
    name: "SEO Starter",
    price: "₹5,000",
    period: "/month",
    features: ["5 keywords", "Monthly report", "Technical fixes", "On-page optimization", "3 month minimum"],
  },
  {
    name: "SEO Growth",
    price: "₹15,000",
    period: "/month",
    features: [
      "15 keywords",
      "Weekly reports",
      "Content recommendations",
      "Backlink strategy",
      "Competitor analysis",
      "6 month minimum",
    ],
    popular: true,
  },
  {
    name: "SEO Enterprise",
    price: "₹35,000",
    period: "/month",
    features: [
      "30+ keywords",
      "Daily monitoring",
      "Content creation (4 posts)",
      "Link building",
      "Dedicated manager",
      "12 month minimum",
    ],
  },
]

const retainerPricing = [
  { service: "Content Writing (per article)", price: "₹3,000 - ₹8,000" },
  { service: "Social Media Management", price: "₹10,000/month" },
  { service: "Google Ads Management", price: "₹8,000 + 10% ad spend" },
  { service: "Email Marketing Setup", price: "₹15,000 one-time" },
  { service: "Analytics & Reporting", price: "₹5,000/month" },
]

export default function SEOMarketingPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <section className="bg-[#0052CC] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] text-balance">
            SEO & Digital Marketing
          </h1>
          <p className="mt-4 text-lg text-[#FFFFFF]/90 max-w-2xl">
            Data-driven strategies that deliver measurable growth and sustainable organic traffic.
          </p>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="border border-[#D1D5DB] p-6">
                <h3 className="text-lg font-bold text-[#0052CC] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#000000]">
                      <CheckIcon className="w-4 h-4 text-[#0052CC]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Pricing Plans */}
      <section id="pricing" className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8 text-center">SEO Retainer Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-[#FFFFFF] border-2 ${plan.popular ? "border-[#0052CC]" : "border-[#D1D5DB]"} p-6 flex flex-col relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0052CC] text-[#FFFFFF] text-xs font-bold">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-lg font-bold text-[#000000]">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#0052CC]">{plan.price}</span>
                  <span className="text-[#4A5568]">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <CheckIcon className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`mt-6 px-4 py-3 text-sm font-semibold text-center transition-colors duration-150 ${
                    plan.popular
                      ? "bg-[#0052CC] text-[#FFFFFF] hover:bg-[#000000]"
                      : "border border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-[#FFFFFF]"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Additional Services</h2>
          <div className="max-w-2xl border border-[#D1D5DB]">
            {retainerPricing.map((item, index) => (
              <div
                key={item.service}
                className={`flex justify-between items-center p-4 ${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F7FA]"} ${
                  index < retainerPricing.length - 1 ? "border-b border-[#D1D5DB]" : ""
                }`}
              >
                <span className="text-sm text-[#000000]">{item.service}</span>
                <span className="text-sm font-bold text-[#0052CC]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Expected Results</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#FFFFFF] border border-[#D1D5DB]">
              <div className="text-4xl font-bold text-[#0052CC]">2-3x</div>
              <div className="text-sm text-[#4A5568] mt-2">Organic traffic increase in 6 months</div>
            </div>
            <div className="text-center p-6 bg-[#FFFFFF] border border-[#D1D5DB]">
              <div className="text-4xl font-bold text-[#0052CC]">40%</div>
              <div className="text-sm text-[#4A5568] mt-2">Average conversion rate improvement</div>
            </div>
            <div className="text-center p-6 bg-[#FFFFFF] border border-[#D1D5DB]">
              <div className="text-4xl font-bold text-[#0052CC]">Top 10</div>
              <div className="text-sm text-[#4A5568] mt-2">Keyword rankings for target terms</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-4">Ready to Grow Your Online Presence?</h2>
          <p className="text-[#FFFFFF]/80 mb-8 max-w-xl mx-auto">
            Get a free SEO audit and customized growth strategy for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#0052CC] font-bold hover:bg-[#F5F7FA] transition-colors duration-150"
          >
            Request Free Audit
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
