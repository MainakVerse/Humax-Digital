import { PageLayout } from "@/components/page-layout"
import Link from "next/link"

const values = [
  {
    title: "Precision",
    description: "Every project is executed with meticulous attention to detail and technical excellence.",
  },
  {
    title: "Reliability",
    description: "We deliver on our commitments with a 97% on-time delivery track record.",
  },
  {
    title: "Innovation",
    description: "We leverage cutting-edge technology to solve complex business challenges.",
  },
  {
    title: "Integrity",
    description: "Transparent communication and ethical practices guide every engagement.",
  },
]

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", expertise: "Digital Strategy" },
  { name: "Priya Sharma", role: "Head of Engineering", expertise: "Full-Stack Development" },
  { name: "Amit Patel", role: "AI Solutions Lead", expertise: "Machine Learning & RAG" },
  { name: "Neha Gupta", role: "Marketing Director", expertise: "SEO & Growth" },
]

const milestones = [
  { year: "2019", event: "Founded in Bangalore with a focus on web development" },
  { year: "2020", event: "Expanded to Wikipedia authority building services" },
  { year: "2021", event: "Launched comprehensive SEO and digital marketing division" },
  { year: "2023", event: "Pioneered AI automation and RAG solutions for enterprises" },
  { year: "2024", event: "Crossed 200+ successful enterprise projects" },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#0052CC] text-[#FFFFFF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Humax Digital</h1>
            <p className="text-xl text-[#FFFFFF]/80 leading-relaxed">
              Engineering digital growth for high-performance businesses since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#002A66] mb-6">Our Mission</h2>
              <p className="text-[#002A66]/70 text-lg leading-relaxed mb-6">
                At Humax Digital, we empower businesses to thrive in the digital economy through precision-engineered
                solutions. We combine technical excellence with strategic insight to deliver measurable growth for our
                clients.
              </p>
              <p className="text-[#002A66]/70 text-lg leading-relaxed">
                From startups to enterprises, we partner with organizations that demand results. Our approach is
                data-driven, our execution is flawless, and our commitment to your success is unwavering.
              </p>
            </div>
            <div className="bg-[#F8FAFC] p-10 border-l-4 border-[#0052CC]">
              <p className="text-2xl font-semibold text-[#002A66] italic">
                "We don't just build digital products. We engineer sustainable competitive advantages."
              </p>
              <p className="text-[#0052CC] font-medium mt-4">— Humax Digital Leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#002A66] mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#FFFFFF] p-8 border border-[#E2E8F0] hover:border-[#0052CC] transition-colors duration-150"
              >
                <h3 className="text-xl font-bold text-[#002A66] mb-3">{value.title}</h3>
                <p className="text-[#002A66]/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#002A66] mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#0052CC] text-[#FFFFFF] flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-[#E2E8F0] mt-2" />}
                </div>
                <div className="pt-4">
                  <p className="text-[#002A66] text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#002A66] mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#0052CC] transition-colors duration-150"
              >
                <div className="h-48 bg-[#002A66] flex items-center justify-center">
                  <span className="text-6xl font-bold text-[#FFFFFF]/20">{member.name.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#002A66] text-lg">{member.name}</h3>
                  <p className="text-[#0052CC] text-sm font-medium">{member.role}</p>
                  <p className="text-[#002A66]/60 text-sm mt-2">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#002A66] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-[#FFFFFF]/70 text-lg mb-8 max-w-2xl mx-auto">
            Join 200+ businesses that trust Humax Digital for their digital growth.
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
