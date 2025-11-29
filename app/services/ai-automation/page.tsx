import type { Metadata } from "next"
import Link from "next/link"
import { ServicePageLayout } from "@/components/service-page-layout"
import { CheckIcon, ArrowRightIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "AI Automation, Agents & RAG Systems | Humax Digital",
  description:
    "Intelligent automation with business-trained LLMs, RAG systems, and custom AI agents for enterprise workflows.",
}

const capabilities = [
  {
    title: "RAG Systems",
    description: "Retrieval-Augmented Generation for accurate, knowledge-grounded AI responses.",
    items: ["Document Q&A", "Knowledge base search", "Contextual chat", "Citation tracking"],
  },
  {
    title: "AI Agents",
    description: "Autonomous agents that execute multi-step workflows and business processes.",
    items: ["Task automation", "Data processing", "Customer support", "Report generation"],
  },
  {
    title: "Custom LLM Solutions",
    description: "Fine-tuned language models trained on your specific domain and data.",
    items: ["Domain adaptation", "Custom prompts", "Safety guardrails", "Performance tuning"],
  },
]

const chatbotTiers = [
  {
    name: "Starter Bot",
    price: "₹30,000",
    description: "Basic FAQ chatbot with predefined responses",
    features: ["Up to 100 FAQ entries", "Website widget", "Basic analytics", "Email notifications", "1 month support"],
  },
  {
    name: "RAG Chatbot",
    price: "₹75,000",
    description: "AI-powered bot with document knowledge base",
    features: [
      "Unlimited documents",
      "Vector search",
      "Contextual responses",
      "Conversation memory",
      "API access",
      "3 month support",
    ],
    popular: true,
  },
  {
    name: "Enterprise Agent",
    price: "₹1,50,000+",
    description: "Full autonomous agent with integrations",
    features: [
      "Multi-tool agent",
      "CRM integration",
      "Workflow automation",
      "Custom training",
      "SLA guarantee",
      "Dedicated support",
    ],
  },
]

const useCases = [
  { title: "Customer Support", description: "24/7 intelligent support with escalation" },
  { title: "Document Analysis", description: "Extract insights from large document sets" },
  { title: "Lead Qualification", description: "Automated prospect scoring and routing" },
  { title: "Internal Knowledge", description: "Company wiki search and assistance" },
  { title: "Data Entry", description: "Automated form filling and validation" },
  { title: "Report Generation", description: "Scheduled automated business reports" },
]

const timeline = [
  { phase: "Discovery", duration: "1 week", details: "Requirements, data audit, architecture" },
  { phase: "Development", duration: "2-4 weeks", details: "Build, integrate, test" },
  { phase: "Training", duration: "1-2 weeks", details: "Fine-tuning, prompt engineering" },
  { phase: "Deployment", duration: "1 week", details: "Production launch, monitoring" },
]

export default function AIAutomationPage() {
  return (
    <ServicePageLayout>
      {/* Hero */}
      <section className="bg-[#0052CC] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] text-balance">
            AI Agents, RAG Systems & Automation
          </h1>
          <p className="mt-4 text-lg text-[#FFFFFF]/90 max-w-2xl">
            Intelligent automation powered by business-trained LLMs and retrieval-augmented generation.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Our AI Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="border border-[#D1D5DB] p-6">
                <h3 className="text-lg font-bold text-[#0052CC] mb-2">{cap.title}</h3>
                <p className="text-sm text-[#4A5568] mb-4">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#000000]">
                      <CheckIcon className="w-4 h-4 text-[#0052CC]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Use Cases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-4 bg-[#FFFFFF] border border-[#D1D5DB]">
                <h3 className="font-bold text-[#000000] mb-1">{useCase.title}</h3>
                <p className="text-sm text-[#4A5568]">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8 text-center">AI Chatbot & Agent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {chatbotTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-[#FFFFFF] border-2 ${tier.popular ? "border-[#0052CC]" : "border-[#D1D5DB]"} p-6 flex flex-col relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0052CC] text-[#FFFFFF] text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-lg font-bold text-[#000000]">{tier.name}</h3>
                <div className="text-2xl font-bold text-[#0052CC] mt-2">{tier.price}</div>
                <p className="text-sm text-[#4A5568] mt-2">{tier.description}</p>
                <ul className="mt-6 space-y-3 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <CheckIcon className="w-4 h-4 text-[#0052CC] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`mt-6 px-4 py-3 text-sm font-semibold text-center transition-colors duration-150 ${
                    tier.popular
                      ? "bg-[#0052CC] text-[#FFFFFF] hover:bg-[#000000]"
                      : "border border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-[#FFFFFF]"
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Project Timeline</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={item.phase} className="relative p-6 bg-[#FFFFFF] border border-[#D1D5DB]">
                <div className="text-xs text-[#0052CC] font-bold mb-2">PHASE {index + 1}</div>
                <h3 className="text-lg font-bold text-[#000000]">{item.phase}</h3>
                <div className="text-sm font-semibold text-[#4A5568] mt-1">{item.duration}</div>
                <p className="text-sm text-[#4A5568] mt-2">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#000000] mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F7FA] p-6">
              <h3 className="font-bold text-[#000000] mb-4">Models Supported</h3>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li>OpenAI GPT-4 / GPT-4 Turbo</li>
                <li>Anthropic Claude 3</li>
                <li>Google Gemini Pro</li>
                <li>Open-source models (Llama, Mistral)</li>
                <li>Custom fine-tuned models</li>
              </ul>
            </div>
            <div className="bg-[#F5F7FA] p-6">
              <h3 className="font-bold text-[#000000] mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-sm text-[#4A5568]">
                <li>Vector databases (Pinecone, Weaviate)</li>
                <li>Cloud hosting (AWS, GCP, Azure)</li>
                <li>Enterprise security & compliance</li>
                <li>Real-time monitoring & analytics</li>
                <li>Auto-scaling architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] mb-4">Ready to Automate with AI?</h2>
          <p className="text-[#FFFFFF]/80 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how AI can transform your business operations.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#0052CC] font-bold hover:bg-[#F5F7FA] transition-colors duration-150"
          >
            Schedule AI Consultation
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
