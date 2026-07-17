"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "FAQS", href: "#faqs" },
  { label: "CONTACT US", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center" aria-label="Lighthouse Investment Group home">
          <Image
            src="/assets/logo.jpg"
            alt="financial planner boston"
            width={220}
            height={64}
            className="h-12 w-auto object-contain lg:h-14"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-[15px] font-medium tracking-wide text-navy transition-colors hover:text-blue-mid"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+17818342600"
            className="hidden items-center gap-2 rounded-full bg-blue-mid px-5 py-2.5 font-heading text-sm font-medium text-white transition-colors hover:bg-navy sm:flex"
          >
            <Phone className="size-4" strokeWidth={2.5} />
            (781) 834-2600
          </a>
          <button
            type="button"
            className="text-navy lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-heading text-sm font-medium tracking-wide text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+17818342600"
                className="flex items-center gap-2 py-3 font-heading text-sm font-medium text-blue-mid"
              >
                <Phone className="size-4" /> (781) 834-2600
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
