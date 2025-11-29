import { PageLayout } from "@/components/page-layout"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#0052CC] text-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-[#FFFFFF]/80">Last updated: November 29, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">1. Introduction</h2>
                <p className="text-[#002A66]/70 leading-relaxed">
                  Humax Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website or
                  use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">2. Information We Collect</h2>
                <p className="text-[#002A66]/70 leading-relaxed mb-4">
                  We may collect information about you in various ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#002A66]/70">
                  <li>
                    <strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact
                    information you provide when filling out forms.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you access and use our website, including IP
                    address, browser type, pages visited, and time spent.
                  </li>
                  <li>
                    <strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your
                    experience.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">3. How We Use Your Information</h2>
                <p className="text-[#002A66]/70 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#002A66]/70">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-[#002A66]/70 leading-relaxed">
                  We do not sell your personal information. We may share your information with trusted third-party
                  service providers who assist us in operating our business, subject to confidentiality agreements. We
                  may also disclose information when required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">5. Data Security</h2>
                <p className="text-[#002A66]/70 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information. However, no method of transmission over the Internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">6. Your Rights</h2>
                <p className="text-[#002A66]/70 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#002A66]/70">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">7. Data Retention</h2>
                <p className="text-[#002A66]/70 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this policy, unless a longer retention period is required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#002A66] mb-4">8. Contact Us</h2>
                <p className="text-[#002A66]/70 leading-relaxed">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-[#F8FAFC] border-l-4 border-[#0052CC]">
                  <p className="text-[#002A66] font-medium">Humax Digital</p>
                  <p className="text-[#002A66]/70">Email: privacy@humaxdigital.com</p>
                  <p className="text-[#002A66]/70">Phone: +91 80 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
