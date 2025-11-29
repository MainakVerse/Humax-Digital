import { PageLayout } from "@/components/page-layout"
import Link from "next/link"

const caseStudies = [
  {
    client: "TechVenture Corp",
    industry: "SaaS / Technology",
    service: "Web Development & AI Automation",
    challenge: "Legacy systems causing 40% customer churn and inability to scale operations efficiently.",
    solution: "Built a modern SaaS platform with AI-powered customer support chatbot and automated workflow systems.",
    results: [
      { metric: "+120%", label: "Lead Conversion" },
      { metric: "-35%", label: "Operational Costs" },
      { metric: "4.8/5", label: "Customer Satisfaction" },
    ],
    timeline: "16 weeks",
  },
  {
    client: "FinanceFirst Ltd",
    industry: "Financial Services",
    service: "Wikipedia & Authority Building",
    challenge: "Lack of online credibility affecting partnership opportunities and investor confidence.",
    solution:
      "Created verified Wikipedia presence with comprehensive notability documentation and media coverage strategy.",
    results: [
      { metric: "Top 3", label: "Google Rankings" },
      { metric: "+85%", label: "Brand Searches" },
      { metric: "12", label: "Media Features" },
    ],
    timeline: "8 weeks",
  },
  {
    client: "RetailMax India",
    industry: "E-commerce / Retail",
    service: "SEO & Digital Marketing",
    challenge: "Poor organic visibility resulting in over-dependence on paid advertising with declining ROI.",
    solution: "Comprehensive on-page SEO overhaul, content strategy, and conversion rate optimization.",
    results: [
      { metric: "+340%", label: "Organic Traffic" },
      { metric: "-45%", label: "CAC Reduction" },
      { metric: "+89%", label: "Revenue Growth" },
    ],
    timeline: "6 months",
  },
  {
    client: "HealthCare Plus",
    industry: "Healthcare",
    service: "AI Agents & RAG Systems",
    challenge: "High volume of repetitive patient inquiries overwhelming support staff and causing delays.",
    solution: "Deployed RAG-enabled AI chatbot trained on medical FAQs with appointment scheduling integration.",
    results: [
      { metric: "70%", label: "Query Automation" },
      { metric: "-60%", label: "Response Time" },
      { metric: "+45%", label: "Staff Efficiency" },
    ],
    timeline: "10 weeks",
  },
  {
    client: "EduLearn Academy",
    industry: "Education / EdTech",
    service: "Web Development",
    challenge: "Outdated learning management system causing student drop-offs and poor engagement metrics.",
    solution: "Modern responsive LMS with video streaming, progress tracking, and gamification features.",
    results: [
      { metric: "+95%", label: "Course Completion" },
      { metric: "3x", label: "Student Enrollment" },
      { metric: "4.9/5", label: "Platform Rating" },
    ],
    timeline: "14 weeks",
  },
  {
    client: "LogiTrans Solutions",
    industry: "Logistics",
    service: "AI Automation",
    challenge: "Manual route planning causing delays and fuel cost overruns across 500+ daily deliveries.",
    solution: "AI-powered route optimization system with real-time tracking and predictive analytics.",
    results: [
      { metric: "-28%", label: "Fuel Costs" },
      { metric: "+35%", label: "On-Time Delivery" },
      { metric: "2hrs", label: "Planning Time Saved" },
    ],
    timeline: "12 weeks",
  },
]

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#0052CC] text-[#FFFFFF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Case Studies</h1>
            <p className="text-xl text-[#FFFFFF]/80 leading-relaxed">
              Real results from real partnerships. See how we've helped businesses achieve measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-[#002A66] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">200+</p>
              <p className="text-[#FFFFFF]/70 text-sm mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold">97%</p>
              <p className="text-[#FFFFFF]/70 text-sm mt-1">Client Retention</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="text-[#FFFFFF]/70 text-sm mt-1">Industries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold">4.9/5</p>
              <p className="text-[#FFFFFF]/70 text-sm mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.client}
                className="border border-[#E2E8F0] hover:border-[#0052CC] transition-colors duration-150"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Client Info */}
                  <div className="bg-[#F8FAFC] p-8 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                    <span className="text-[#0052CC] text-sm font-medium uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-[#002A66] mt-2 mb-4">{study.client}</h3>
                    <div className="inline-block bg-[#0052CC] text-[#FFFFFF] px-3 py-1 text-sm font-medium">
                      {study.service}
                    </div>
                    <p className="text-[#002A66]/60 text-sm mt-4">Timeline: {study.timeline}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
                    <div className="mb-6">
                      <h4 className="font-bold text-[#002A66] mb-2">Challenge</h4>
                      <p className="text-[#002A66]/70 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002A66] mb-2">Solution</h4>
                      <p className="text-[#002A66]/70 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-8 bg-[#002A66] text-[#FFFFFF]">
                    <h4 className="font-bold mb-6">Results</h4>
                    <div className="space-y-4">
                      {study.results.map((result) => (
                        <div key={result.label} className="flex items-center justify-between">
                          <span className="text-[#FFFFFF]/70 text-sm">{result.label}</span>
                          <span className="text-xl font-bold">{result.metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0052CC] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Success Story Starts Here</h2>
          <p className="text-[#FFFFFF]/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you achieve results that matter. Get a customized proposal for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#FFFFFF] text-[#0052CC] px-8 py-4 font-semibold hover:bg-[#F8FAFC] transition-colors duration-150"
          >
            Get Proposal
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
