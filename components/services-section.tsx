import Image from "next/image"

const services = [
  { title: "Financial Advisors", icon: "/assets/icon3.svg", alt: "financial advisors in boston" },
  { title: "Wealth Management", icon: "/assets/icon1.svg", alt: "retirement planning quincy" },
  { title: "Tax Planning", icon: "/assets/icon5.svg", alt: "financial companies in boston" },
  { title: "Retirement Planning", icon: "/assets/icon2.svg", alt: "retirement planning quincy" },
  { title: "Investment Management", icon: "/assets/icon4.svg", alt: "wealth management milton" },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24"
      style={{ backgroundImage: "linear-gradient(to right, #013367, #669acc)" }}
    >
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-serif-alegreya text-lg text-white/80">Services</p>
            <h2 className="mt-2 font-serif-alegreya text-[26px] font-medium leading-snug text-balance text-white sm:text-[30px] lg:text-[34px]">
              We offer securities and advisory services offered through LPL Financial, a registered investment advisor,
              Member FINRA/SIPC
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[15px] leading-relaxed text-white/90">
              As an added value to our services, we have established professional alliances with an estate planning
              attorney and with a certified public accountant. We call it our &ldquo;three-tiered approach&rdquo; to
              financial planning.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center gap-5 bg-white px-4 py-8 text-center shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex h-16 items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.alt}
                  width={64}
                  height={64}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h4 className="font-heading text-sm font-medium leading-tight text-navy">{service.title}</h4>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#services"
            className="rounded-full bg-white px-8 py-3 font-heading text-sm font-medium tracking-wide text-navy transition-colors hover:bg-navy hover:text-white"
          >
            VIEW ALL SERVICES
          </a>
        </div>
      </div>
    </section>
  )
}
