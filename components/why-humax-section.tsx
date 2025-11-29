import Link from "next/link"
import { ClockIcon, ShieldIcon, TrendingIcon } from "./icons"

const features = [
  {
    icon: ClockIcon,
    title: "Delivery You Can Trust",
    description: "97% on-time delivery record across all projects and engagements.",
  },
  {
    icon: ShieldIcon,
    title: "Enterprise Precision",
    description: "Secure, scalable & compliant stacks built for serious businesses.",
  },
  {
    icon: TrendingIcon,
    title: "Measurable Results",
    description: "Growth backed by verifiable metrics and transparent reporting.",
  },
]

export function WhyHumaxSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002A66] text-balance">Why Humax Digital</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            Enterprise-grade solutions with uncompromising quality standards
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-[#D1D5DB]">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-8 bg-[#FFFFFF] ${index < features.length - 1 ? "md:border-r border-b md:border-b-0 border-[#D1D5DB]" : ""}`}
            >
              <div className="w-14 h-14 border-2 border-[#0052CC] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#0052CC]" />
              </div>
              <h3 className="text-xl font-bold text-[#002A66] mb-3">{feature.title}</h3>
              <p className="text-[#4A5568] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Get Proposal CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#4A5568] mb-4">Experience enterprise-grade reliability for your business</p>
          <Link
            href="/#contact"
            className="inline-flex px-8 py-4 bg-[#0052CC] text-[#FFFFFF] text-base font-bold hover:bg-[#002A66] transition-colors duration-150"
          >
            Get Proposal
          </Link>
        </div>
      </div>
    </section>
  )
}
