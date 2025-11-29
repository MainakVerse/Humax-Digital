import { PageLayout } from "@/components/page-layout"

export default function TermsOfServicePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#0052CC] text-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-[#FFFFFF]/80">Last updated: November 29, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">1. Agreement to Terms</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                By accessing or using the services provided by Humax Digital, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, you may not access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">2. Services</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                Humax Digital provides digital services including web development, Wikipedia page creation, SEO and
                digital marketing, and AI automation solutions. The specific scope, deliverables, and terms for each
                project will be outlined in a separate Statement of Work (SOW) or service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">3. Client Responsibilities</h2>
              <p className="text-[#000000]/70 leading-relaxed mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#000000]/70">
                <li>Provide accurate and complete information required for service delivery</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Ensure you have the rights to any materials provided to us</li>
                <li>Pay all fees as outlined in the agreed-upon terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">4. Payment Terms</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                Payment terms, including amounts, schedules, and methods, will be specified in each project agreement.
                Unless otherwise stated, invoices are due within 15 days of issuance. Late payments may incur interest
                charges.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">5. Intellectual Property</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                Upon full payment, clients receive ownership rights to deliverables as specified in the project
                agreement. Humax Digital retains the right to use project work in portfolios and case studies unless
                otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">6. Confidentiality</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                Both parties agree to maintain the confidentiality of proprietary information shared during the course
                of the engagement. This obligation survives the termination of any agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">7. Limitation of Liability</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                Humax Digital's liability for any claims arising from our services is limited to the amount paid by the
                client for the specific service in question. We are not liable for indirect, incidental, or
                consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">8. Wikipedia Services Disclaimer</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                Wikipedia page creation services are subject to Wikipedia's editorial guidelines and notability
                requirements. Humax Digital does not guarantee page approval or retention, as final decisions are made
                by Wikipedia's volunteer editor community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">9. Termination</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                Either party may terminate a service agreement with written notice as specified in the project terms.
                Upon termination, the client is responsible for payment of all work completed up to the termination
                date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">10. Governing Law</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                These Terms of Service are governed by the laws of India. Any disputes shall be resolved through
                arbitration in Hyderabad, Karnataka.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000000] mb-4">11. Contact</h2>
              <p className="text-[#000000]/70 leading-relaxed">
                For questions regarding these Terms of Service, please contact:
              </p>
              <div className="mt-4 p-6 bg-[#F8FAFC] border-l-4 border-[#0052CC]">
                <p className="text-[#000000] font-medium">Humax Digital</p>
                <p className="text-[#000000]/70">Email: legal@humaxdigital.com</p>
                <p className="text-[#000000]/70">Phone: +91 80 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
