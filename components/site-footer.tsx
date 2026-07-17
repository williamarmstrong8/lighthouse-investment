import Image from "next/image"

const footerLinks = [
  { label: "HOME", href: "#home" },
  { label: "OUR TEAM", href: "#about" },
  { label: "HISTORY", href: "#about" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "FAQS", href: "#faqs" },
  { label: "CONTACT US", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/20 pb-8 lg:flex-row lg:items-center">
          <Image
            src="/assets/logowhite.png"
            alt="Lighthouse Investment Group"
            width={320}
            height={40}
            className="h-9 w-auto object-contain"
          />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-heading text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-blue-mid"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="space-y-4 py-8 text-[13px] leading-relaxed text-white/70">
          <p>
            <strong className="text-white">Lighthouse Investment Group, Inc.</strong> 200 Ledgewood Pl, Suite 102A
            Rockland, MA 02370 | P{" "}
            <a href="tel:+17818342600" className="text-blue-mid hover:underline">
              (781) 834-2600
            </a>
          </p>
          <p>
            The Financial Advisor(s) associated with this website may discuss and/or transact business only with
            residents of the states in which they are properly registered or licensed. No offers may be made or accepted
            from any resident of any other state. Please check BrokerCheck for a list of current registrations.
          </p>
          <p>
            Securities and advisory services offered through LPL Financial, a registered investment advisor, Member{" "}
            <a href="https://www.finra.org/" className="text-blue-mid hover:underline">
              FINRA
            </a>
            /
            <a href="https://www.sipc.org/" className="text-blue-mid hover:underline">
              SIPC
            </a>
            .
          </p>
          <p>
            The LPL Financial registered representative(s) associated with this website may discuss and/or transact
            business only with residents of the states in which they are properly registered or licensed. No offers may
            be made or accepted from any resident of any other state.
          </p>
          <p>
            LPL Financial{" "}
            <a href="#" className="text-blue-mid hover:underline">
              Form CRS
            </a>
          </p>
          <p>
            Use of Cookies: Our website uses Google Analytics to provide insight into our website and to improve the
            relevance of marketing. For more details about how Google uses information from sites or apps that use our
            services, visit google.com/policies/privacy/partners/. If you would like to opt out of Google Analytics,
            please visit tools.google.com/dlpage/gaoptout.
          </p>
        </div>

        <div className="border-t border-white/20 pt-6 text-[13px] text-white/70">
          © 2026 Lighthouse Investment Group, Inc. Website by{" "}
          <a href="#" className="text-blue-mid hover:underline">
            Interactive Palette
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-mid hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}
