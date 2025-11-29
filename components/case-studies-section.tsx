import Link from "next/link"

const caseStudies = [
  {
    client: "TechCorp Solutions",
    metric: "+120% lead conversion rate",
    timeframe: "in 90 days",
  },
  {
    client: "Global Retail Inc",
    metric: "Cost reduced by 35%",
    timeframe: "with AI workflow automation",
  },
  {
    client: "FinServe Partners",
    metric: "2.5x organic traffic growth",
    timeframe: "in 6 months",
  },
  {
    client: "HealthTech Systems",
    metric: "Wikipedia page approved",
    timeframe: "in 45 days",
  },
]

const clientLogos = ["TechCorp", "GlobalRetail", "FinServe", "HealthTech", "DataPro", "CloudBase"]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002A66] text-balance">Impact & Results</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            Verified outcomes from our enterprise partnerships
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caseStudies.map((study) => (
            <div key={study.client} className="p-6 bg-[#FFFFFF] border border-[#D1D5DB]">
              <div className="text-xs text-[#4A5568] uppercase tracking-wider mb-2">{study.client}</div>
              <div className="text-xl font-bold text-[#0052CC] mb-1">{study.metric}</div>
              <div className="text-sm text-[#4A5568]">{study.timeframe}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-[#4A5568] mb-4">Want similar results for your business?</p>
          <Link
            href="/#contact"
            className="inline-flex px-8 py-4 bg-[#0052CC] text-[#FFFFFF] text-base font-bold hover:bg-[#002A66] transition-colors duration-150"
          >
            Get Proposal
          </Link>
        </div>

        {/* Client Logos */}
        <div className="border-t border-[#D1D5DB] pt-12">
          <p className="text-center text-sm text-[#4A5568] uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-0 border border-[#D1D5DB]">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className={`p-6 flex items-center justify-center bg-[#FFFFFF] ${index < clientLogos.length - 1 ? "border-r border-[#D1D5DB]" : ""}`}
              >
                <span className="text-[#002A66] font-bold text-sm tracking-tight">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
