import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title:
    "Humax Digital | Best Digital Solutions - AI, Web Dev, SEO & Marketing",
  description:
    "Humax Digital is a leading AI company in India specializing in AI automation, custom web development, RAG systems, SEO, Wikipedia page creation, digital marketing, and data-driven growth solutions for businesses worldwide.",
  metadataBase: new URL("https://www.humaxdigital.com"),
  alternates: { canonical: "https://www.humaxdigital.com" },
  icons: {
    icon: "/favicon.ico",
  },
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
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
