import Link from "next/link"

const footerLinks = {
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Wikipedia Services", href: "/services/wikipedia" },
    { label: "SEO & Marketing", href: "/services/seo-marketing" },
    { label: "AI Automation", href: "/services/ai-automation" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#002A66] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FFFFFF] flex items-center justify-center">
                <span className="text-[#0052CC] font-bold text-lg">H</span>
              </div>
              <span className="text-[#FFFFFF] font-bold text-xl tracking-tight">Humax Digital</span>
            </div>
            <p className="text-[#FFFFFF]/70 text-sm leading-relaxed max-w-sm">
              Engineering digital growth for high-performance businesses. Smart AI solutions, web development, and
              data-driven marketing.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-[#FFFFFF]/30 flex items-center justify-center hover:bg-[#FFFFFF]/10 transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#FFFFFF]/30 flex items-center justify-center hover:bg-[#FFFFFF]/10 transition-colors duration-150"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF]/70 text-sm hover:text-[#FFFFFF] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF]/70 text-sm hover:text-[#FFFFFF] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF]/70 text-sm hover:text-[#FFFFFF] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#FFFFFF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#FFFFFF]/60 text-sm">© {new Date().getFullYear()} Humax Digital. All rights reserved.</p>
          <p className="text-[#FFFFFF]/60 text-sm">Engineered in India for global businesses.</p>
        </div>
      </div>
    </footer>
  )
}
