"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif-alegreya text-[28px] font-medium text-navy sm:text-[34px]">
              Speak with a Professional
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy/90">
              Let&apos;s begin the conversation. Submit this form to schedule an initial conversation. We&apos;ll use
              what we learn to match you with the right financial professional for your background and requirements.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-blue-mid" />
                <p className="text-[15px] leading-relaxed text-navy">
                  200 Ledgewood Pl, Suite 102A
                  <br />
                  Rockland, MA 02370
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-blue-mid" />
                <a
                  href="mailto:bjoyce@lighthouseinvestment.com"
                  className="text-[15px] text-navy transition-colors hover:text-blue-mid"
                >
                  bjoyce@lighthouseinvestment.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-blue-mid" />
                <a href="tel:+17818342600" className="text-[15px] text-blue-mid transition-colors hover:text-navy">
                  (781) 834-2600
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-md border border-border bg-secondary p-8 text-center">
                <h3 className="font-serif-alegreya text-2xl font-medium text-navy">Thank you!</h3>
                <p className="mt-2 text-[15px] text-navy/90">
                  Your message has been received. A member of our team will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
                      Name <span className="text-blue-mid">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter Full Name.."
                      className="w-full rounded-sm border border-input bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-mid"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
                      Email <span className="text-blue-mid">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter Email.."
                      className="w-full rounded-sm border border-input bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-mid"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter Phone.."
                    className="w-full rounded-sm border border-input bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-mid"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us what you need"
                    className="w-full resize-y rounded-sm border border-input bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-mid"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-navy py-3.5 font-heading text-sm font-medium tracking-wide text-white transition-colors hover:bg-blue-mid"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
