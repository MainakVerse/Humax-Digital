"use client"

import type React from "react"

import { useState } from "react"

const services = [
  "Web Development & SaaS",
  "Wikipedia Page Creation",
  "SEO & Digital Marketing",
  "AI Automation & RAG Systems",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002A66] text-balance">
              Let&apos;s Build Something Powerful
            </h2>
            <p className="mt-4 text-lg text-[#4A5568] leading-relaxed">
              Ready to accelerate your digital growth? Complete the form and our team will respond within 24 business
              hours.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5F7FA] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0052CC]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#002A66]">Email</div>
                  <div className="text-[#4A5568]">contact@humaxdigital.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5F7FA] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0052CC]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#002A66]">Phone</div>
                  <div className="text-[#4A5568]">+91 92463 51178</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F5F7FA] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0052CC]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#002A66]">Office</div>
                  <div className="text-[#4A5568]">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#F5F7FA] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#002A66] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1D5DB] text-[#002A66] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-[#002A66] mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    required
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1D5DB] text-[#002A66] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    placeholder="Acme Corporation"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-semibold text-[#002A66] mb-2">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    required
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1D5DB] text-[#002A66] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    placeholder="john@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#002A66] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1D5DB] text-[#002A66] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    placeholder="+91 92463 51178"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#002A66] mb-2">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1D5DB] text-[#002A66] focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#002A66] mb-2">
                  Message / Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#D1D5DB] text-[#002A66] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] resize-none"
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 w-4 h-4 border border-[#D1D5DB] text-[#0052CC] focus:ring-[#0052CC]"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                />
                <label htmlFor="consent" className="text-sm text-[#4A5568]">
                  I agree to be contacted by Humax Digital for this business request.{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#0052CC] text-[#FFFFFF] font-bold hover:bg-[#002A66] transition-colors duration-150"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
