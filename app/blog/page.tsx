import { PageLayout } from "@/components/page-layout"

const blogPosts = [
  {
    title: "How RAG Systems Are Transforming Enterprise Customer Support",
    excerpt:
      "Discover how Retrieval-Augmented Generation is enabling businesses to automate 70% of customer queries while maintaining accuracy.",
    category: "AI & Automation",
    date: "November 25, 2025",
    readTime: "8 min read",
  },
  {
    title: "The Complete Guide to Wikipedia Page Creation for Businesses",
    excerpt:
      "Understanding notability requirements, editorial guidelines, and the ethical approach to establishing Wikipedia presence.",
    category: "Authority Building",
    date: "November 18, 2025",
    readTime: "12 min read",
  },
  {
    title: "Technical SEO Audit Checklist for 2025",
    excerpt:
      "A comprehensive checklist covering Core Web Vitals, structured data, crawlability, and indexation best practices.",
    category: "SEO & Marketing",
    date: "November 10, 2025",
    readTime: "10 min read",
  },
  {
    title: "Building Scalable SaaS Products: Architecture Decisions That Matter",
    excerpt:
      "Key architectural considerations for building enterprise-grade SaaS applications that scale with your business.",
    category: "Web Development",
    date: "November 3, 2025",
    readTime: "15 min read",
  },
  {
    title: "AI Agents vs Traditional Chatbots: A Technical Comparison",
    excerpt:
      "Understanding the fundamental differences between rule-based chatbots and modern AI agents powered by LLMs.",
    category: "AI & Automation",
    date: "October 28, 2025",
    readTime: "9 min read",
  },
  {
    title: "Content Strategy for B2B Lead Generation",
    excerpt: "How to create content that attracts, engages, and converts enterprise buyers through the sales funnel.",
    category: "SEO & Marketing",
    date: "October 20, 2025",
    readTime: "11 min read",
  },
]

const categories = ["All", "AI & Automation", "Web Development", "SEO & Marketing", "Authority Building"]

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-[#0052CC] text-[#FFFFFF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Insights & Resources</h1>
            <p className="text-xl text-[#FFFFFF]/80 leading-relaxed">
              Expert perspectives on digital transformation, AI, SEO, and business growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  index === 0
                    ? "bg-[#0052CC] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] text-[#002A66] border border-[#E2E8F0] hover:border-[#0052CC]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="border border-[#E2E8F0] hover:border-[#0052CC] transition-colors duration-150 flex flex-col"
              >
                <div className="h-48 bg-[#F8FAFC] flex items-center justify-center border-b border-[#E2E8F0]">
                  <span className="text-[#002A66]/20 text-6xl font-bold">{post.category.charAt(0)}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[#0052CC] text-sm font-medium">{post.category}</span>
                  <h3 className="text-xl font-bold text-[#002A66] mt-2 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-[#002A66]/70 text-sm flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E2E8F0]">
                    <span className="text-[#002A66]/60 text-sm">{post.date}</span>
                    <span className="text-[#002A66]/60 text-sm">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#002A66] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-[#FFFFFF]/70 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on digital growth and AI innovation.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#FFFFFF] text-[#002A66] border-0 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
            />
            <button className="bg-[#0052CC] text-[#FFFFFF] px-6 py-3 font-semibold hover:bg-[#0052CC]/90 transition-colors duration-150">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
