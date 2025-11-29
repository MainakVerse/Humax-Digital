import { PageLayout } from "@/components/page-layout"

const openings = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    description:
      "Build scalable web applications and SaaS products for enterprise clients using Next.js, React, and Node.js.",
  },
  {
    title: "AI/ML Engineer",
    department: "AI Solutions",
    location: "Bangalore / Remote",
    type: "Full-time",
    description: "Develop RAG systems, AI agents, and automation solutions using LLMs and modern AI frameworks.",
  },
  {
    title: "SEO Specialist",
    department: "Digital Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive organic growth through technical SEO, content optimization, and data-driven strategies.",
  },
  {
    title: "Wikipedia Content Researcher",
    department: "Authority Building",
    location: "Remote",
    type: "Contract",
    description: "Research and document notability for Wikipedia page creation following editorial guidelines.",
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "Bangalore",
    type: "Full-time",
    description: "Lead cross-functional teams to deliver complex digital projects on time and within scope.",
  },
]

const benefits = [
  { title: "Competitive Compensation", description: "Industry-leading salaries with performance bonuses" },
  { title: "Remote Flexibility", description: "Work from anywhere with flexible hours" },
  { title: "Health Insurance", description: "Comprehensive medical coverage for you and family" },
  { title: "Learning Budget", description: "Annual allowance for courses, certifications, and conferences" },
  { title: "Stock Options", description: "Equity participation for full-time employees" },
  { title: "Paid Time Off", description: "Generous leave policy including mental health days" },
]

export default function CareersPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#0052CC] text-[#FFFFFF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Careers at Humax Digital</h1>
            <p className="text-xl text-[#FFFFFF]/80 leading-relaxed">
              Join a team that's engineering the future of digital business. We're looking for exceptional talent.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#002A66] mb-12 text-center">Why Join Humax Digital?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 border border-[#E2E8F0] hover:border-[#0052CC] transition-colors duration-150"
              >
                <h3 className="text-lg font-bold text-[#002A66] mb-2">{benefit.title}</h3>
                <p className="text-[#002A66]/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#002A66] mb-12 text-center">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0052CC] transition-colors duration-150"
              >
                <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#002A66]">{job.title}</h3>
                      <span className="bg-[#0052CC] text-[#FFFFFF] px-2 py-0.5 text-xs font-medium">{job.type}</span>
                    </div>
                    <p className="text-[#002A66]/70 text-sm mb-2">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-[#002A66]/60">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@humaxdigital.com?subject=Application: ${job.title}`}
                    className="inline-block bg-[#002A66] text-[#FFFFFF] px-6 py-3 font-semibold hover:bg-[#0052CC] transition-colors duration-150 text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20 bg-[#002A66] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Role?</h2>
          <p className="text-[#FFFFFF]/70 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <a
            href="mailto:careers@humaxdigital.com?subject=General Application"
            className="inline-block bg-[#FFFFFF] text-[#0052CC] px-8 py-4 font-semibold hover:bg-[#F8FAFC] transition-colors duration-150"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
