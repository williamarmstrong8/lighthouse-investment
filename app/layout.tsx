import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Alegreya_Sans, Open_Sans } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
})

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-alegreya',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Financial advisors in Boston | Lighthouse Investment Group',
  description:
    'Lighthouse Investment Group, Inc. is an independent, multigenerational team of financial advisors in Boston offering financial planning, wealth management, tax planning, and retirement planning.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#013367',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${oswald.variable} ${alegreyaSans.variable} ${openSans.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
