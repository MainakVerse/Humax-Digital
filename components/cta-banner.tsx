import Link from "next/link"

export function CtaBanner() {
  return (
    <section className="py-16 bg-[#002A66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] text-balance">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="mt-2 text-[#FFFFFF]/80">
              Get a customized proposal tailored to your business needs within 24 hours.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 px-10 py-4 bg-[#FFFFFF] text-[#002A66] text-lg font-bold hover:bg-[#F5F7FA] transition-colors duration-150"
          >
            Get Proposal
          </Link>
        </div>
      </div>
    </section>
  )
}
