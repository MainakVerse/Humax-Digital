import type { Metadata } from "next"
import Link from "next/link"
import { ServicePageLayout } from "@/components/service-page-layout"
import { CheckIcon, ArrowRightIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Web Development & SaaS Builds | Humax Digital",
  description:
    "High-quality business websites, web applications, and SaaS products built with enterprise-grade architecture.",
}

const features = [
  "Custom responsive design",
  "Modern tech stack (Next.js, React)",
  "Performance optimized",
  "SEO-ready structure",
  "Admin dashboard",
  "Database integration",
  "API development",
  "Cloud deployment",
]

const pricingTiers = [
  {
    name: "Starter Website",
    pages: "1-5 pages",
    price: "₹15,000",
    features: ["Responsive design", "Contact form", "Basic SEO setup", "1 revision round", "2 week delivery"],
  },
  {
    name: "Business Website",
    pages: "6-10 pages",
    price: "₹35,000",
    features: [
      "Custom design",
      "CMS integration",
      "Advanced SEO",
      "Blog setup",
      "3 revision rounds",
      "3 week delivery",
    ],
  },
  {
    name: "Corporate Portal",
    pages: "11-20 pages",
    price: "₹75,000",
    features: [
      "Custom UI/UX",
      "User authentication",
      "Database integration",
      "Admin panel",
      "API integrations",
      "4 week delivery",
    ],
  },
  {
    name: "SaaS Application",
    pages: "Full product",
    price: "₹1,50,000+",
    features: [
      "Full-stack development",
      "Multi-tenant architecture",
      "Payment integration",
      "Analytics dashboard",
      "Ongoing support",
      "8-12 week delivery",
    ],
  },
]

const deliverables = [
  "Source code ownership",
  "Technical documentation",
  "Deployment to your preferred hosting",
  "30 days post-launch support",
  "Training session for team",
]

export default function WebDevelopmentPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <section className="bg-[#0052CC] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] text-balance">
            Web Development & SaaS Products
          </h1>
          <p className="mt-4 text-lg text-[#FFFFFF]/90 max-w-2xl">
            Enterprise-grade websites and web applications built for performance, security, and scale.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-6">What We Build</h2>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                From corporate websites to complex SaaS platforms, we deliver production-ready solutions using modern
                technologies. Our development process emphasizes clean code, scalable architecture, and seamless user
                experiences.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#0052CC] flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3 text-[#FFFFFF]" />
                    </div>
                    <span className="text-sm text-[#002A66]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F7FA] p-8">
              <h3 className="text-lg font-bold text-[#002A66] mb-4">Tech Stack</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-[#0052CC] mb-1">Frontend</div>
                  <div className="text-sm text-[#4A5568]">React, Next.js, TypeScript, Tailwind CSS</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0052CC] mb-1">Backend</div>
                  <div className="text-sm text-[#4A5568]">Node.js, Python, PostgreSQL, MongoDB</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0052CC] mb-1">Cloud</div>
                  <div className="text-sm text-[#4A5568]">AWS, Vercel, Google Cloud Platform</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0052CC] mb-1">Integrations</div>
                  <div className="text-sm text-[#4A5568]">Stripe, Razorpay, SendGrid, Twilio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#002A66] mb-8 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="bg-[#FFFFFF] border border-[#D1D5DB] p-6 flex flex-col">
                <div className="text-xs text-[#4A5568] uppercase tracking-wider">{tier.pages}</div>
                <h3 className="text-lg font-bold text-[#002A66] mt-2">{tier.name}</h3>
                <div className="text-2xl font-bold text-[#0052CC] mt-4">{tier.price}</div>
                <ul className="mt-6 space-y-3 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <CheckIcon className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="mt-6 px-4 py-3 bg-[#0052CC] text-[#FFFFFF] text-sm font-semibold text-center hover:bg-[#002A66] transition-colors duration-150"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#002A66] mb-8">What You Receive</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="p-4 bg-[#F5F7FA] border border-[#D1D5DB]">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[#0052CC]" />
                  <span className="text-sm font-medium text-[#002A66]">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#002A66]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-4">Ready to Build Your Web Presence?</h2>
          <p className="text-[#FFFFFF]/80 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your project requirements and create something exceptional.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#0052CC] font-bold hover:bg-[#F5F7FA] transition-colors duration-150"
          >
            Start Your Project
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
