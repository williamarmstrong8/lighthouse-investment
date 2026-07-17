import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <p className="font-serif-alegreya text-lg text-blue-mid">About Us</p>
        <h2 className="mt-2 max-w-4xl font-serif-alegreya text-[28px] font-medium leading-snug text-balance text-navy sm:text-[34px] lg:text-[40px]">
          We are an independent, multigenerational team of financial advocates who will always support you.
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-[15px] leading-relaxed text-navy/90">
            <p>
              Our tailored financial planning and investment management services provide consistency, comfort, and
              confidence at every stage of your life and your family&apos;s life. You can trust us to offer objective
              advice and prompt action to ensure all your important financial needs are addressed.
            </p>
            <h3 className="font-serif-alegreya text-2xl font-medium text-navy">Wealth Management</h3>
            <p>
              You can trust that every critical detail is being addressed, and you won&apos;t need to worry about how to
              manage every aspect of your financial plan &ndash; that&apos;s our responsibility.
            </p>
            <p>
              At Lighthouse Investment Group, Inc., our Wealth Management Team offers a wide range of in-house services.
              These primarily include financial planning and investment management, but we also provide additional
              essential services. Overall, we ensure comprehensive planning and meticulous execution while anticipating
              your needs.
            </p>
            <p>
              We understand that every individual, family, or business has unique goals and priorities regarding what
              they want to achieve with their money and investments.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block rounded-full bg-navy px-7 py-3 font-heading text-sm font-medium tracking-wide text-white transition-colors hover:bg-blue-mid"
              >
                MEET OUR TEAM
              </a>
            </div>

            <a
              href="https://brokercheck.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
              aria-label="BrokerCheck by FINRA"
            >
              <Image
                src="/assets/brokercheck.png"
                alt="boston financial advisors"
                width={220}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          <div className="lg:pt-16">
            <Image
              src="/assets/team.jpg"
              alt="Lighthouse Investment Group team"
              width={1024}
              height={869}
              className="w-full rounded-sm object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
