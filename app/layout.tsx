import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title:
    "Humax Digital | AI Company in India | Best Web Development, Digital Marketing & SEO Agency",
  description:
    "Humax Digital is a leading AI company in India specializing in AI automation, custom web development, RAG systems, SEO, Wikipedia page creation, digital marketing, and data-driven growth solutions for businesses worldwide.",
  keywords: [
    "AI Solutions",
    "AI Automation Agency",
    "Custom AI Development",
    "RAG Systems",
    "Web Development Company",
    "Next.js Development",
    "Digital Marketing Agency",
    "SEO Services",
    "Wikipedia Page Creation Service",
    "AI Chatbots",
    "Marketing Automation",
    "Enterprise AI",
  ],
  metadataBase: new URL("https://www.humaxdigital.com"),
  alternates: { canonical: "https://www.humaxdigital.com" },
}

export const viewport: Viewport = {
  themeColor: "#0052CC",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
