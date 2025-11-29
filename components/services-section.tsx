import Link from "next/link"
import { CodeIcon, WikiIcon, ChartIcon, BotIcon, ArrowRightIcon } from "./icons"

const services = [
  {
    icon: CodeIcon,
    title: "Web Development",
    description: "High-quality business websites, portals & SaaS builds with enterprise-grade architecture.",
    href: "/services/web-development",
  },
  {
    icon: WikiIcon,
    title: "Wikipedia Authority Building",
    description: "Verified presence and ethical reputation growth through authoritative content.",
    href: "/services/wikipedia",
  },
  {
    icon: ChartIcon,
    title: "SEO & Digital Marketing",
    description: "On-page SEO, conversion strategy & growth marketing for measurable results.",
    href: "/services/seo-marketing",
  },
  {
    icon: BotIcon,
    title: "AI Agents & RAG Systems",
    description: "Intelligent automation with business-trained LLMs and retrieval-augmented generation.",
    href: "/services/ai-automation",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002A66] text-balance">Our Services</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            Comprehensive digital solutions engineered for enterprise success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-6 bg-[#FFFFFF] border border-[#D1D5DB] hover:border-[#0052CC] hover:border-2 transition-all duration-150 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-[#F5F7FA] flex items-center justify-center mb-4 group-hover:bg-[#0052CC] transition-colors duration-150">
                <service.icon className="w-6 h-6 text-[#0052CC] group-hover:text-[#FFFFFF] transition-colors duration-150" />
              </div>
              <h3 className="text-lg font-bold text-[#002A66] mb-2">{service.title}</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center gap-2 text-[#0052CC] text-sm font-semibold">
                <span>View Service</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A5568] mb-4">Ready to transform your digital presence?</p>
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
