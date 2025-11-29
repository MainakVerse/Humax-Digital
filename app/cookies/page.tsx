import { PageLayout } from "@/components/page-layout"

export default function CookiePolicyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#0052CC] text-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-[#FFFFFF]/80">Last updated: November 29, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-4">What Are Cookies?</h2>
              <p className="text-[#002A66]/70 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help websites
                remember your preferences, understand how you use the site, and improve your overall experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-4">How We Use Cookies</h2>
              <p className="text-[#002A66]/70 leading-relaxed mb-4">
                Humax Digital uses cookies for the following purposes:
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-[#F8FAFC] border-l-4 border-[#0052CC]">
                  <h3 className="font-bold text-[#002A66] mb-2">Essential Cookies</h3>
                  <p className="text-[#002A66]/70 text-sm">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>

                <div className="p-6 bg-[#F8FAFC] border-l-4 border-[#002A66]">
                  <h3 className="font-bold text-[#002A66] mb-2">Analytics Cookies</h3>
                  <p className="text-[#002A66]/70 text-sm">
                    Help us understand how visitors interact with our website by collecting anonymous information.
                  </p>
                </div>

                <div className="p-6 bg-[#F8FAFC] border-l-4 border-[#002A66]">
                  <h3 className="font-bold text-[#002A66] mb-2">Functional Cookies</h3>
                  <p className="text-[#002A66]/70 text-sm">
                    Remember your preferences and settings to enhance your experience.
                  </p>
                </div>

                <div className="p-6 bg-[#F8FAFC] border-l-4 border-[#002A66]">
                  <h3 className="font-bold text-[#002A66] mb-2">Marketing Cookies</h3>
                  <p className="text-[#002A66]/70 text-sm">
                    Used to deliver relevant advertisements and track the effectiveness of marketing campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-4">Cookies We Use</h2>
              <div className="border border-[#E2E8F0]">
                <table className="w-full text-sm">
                  <thead className="bg-[#F8FAFC]">
                    <tr>
                      <th className="text-left p-4 font-bold text-[#002A66] border-b border-[#E2E8F0]">Cookie Name</th>
                      <th className="text-left p-4 font-bold text-[#002A66] border-b border-[#E2E8F0]">Purpose</th>
                      <th className="text-left p-4 font-bold text-[#002A66] border-b border-[#E2E8F0]">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#002A66]/70">
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="p-4">_session</td>
                      <td className="p-4">Session management</td>
                      <td className="p-4">Session</td>
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="p-4">_ga</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">2 years</td>
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <td className="p-4">_gid</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">24 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4">consent</td>
                      <td className="p-4">Cookie consent preference</td>
                      <td className="p-4">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-4">Managing Cookies</h2>
              <p className="text-[#002A66]/70 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#002A66]/70">
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their
                  settings.
                </li>
                <li>
                  <strong>Cookie Consent:</strong> Use our cookie consent banner to manage your preferences.
                </li>
                <li>
                  <strong>Opt-Out Links:</strong> For analytics cookies, you can use Google's opt-out browser add-on.
                </li>
              </ul>
              <p className="text-[#002A66]/70 leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-4">Third-Party Cookies</h2>
              <p className="text-[#002A66]/70 leading-relaxed">
                Some cookies on our website are set by third-party services such as Google Analytics. These cookies are
                subject to the respective privacy policies of these third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-4">Updates to This Policy</h2>
              <p className="text-[#002A66]/70 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#002A66] mb-4">Contact Us</h2>
              <p className="text-[#002A66]/70 leading-relaxed">
                If you have questions about our use of cookies, please contact:
              </p>
              <div className="mt-4 p-6 bg-[#F8FAFC] border-l-4 border-[#0052CC]">
                <p className="text-[#002A66] font-medium">Humax Digital</p>
                <p className="text-[#002A66]/70">Email: privacy@humaxdigital.com</p>
                <p className="text-[#002A66]/70">Phone: +91 80 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
