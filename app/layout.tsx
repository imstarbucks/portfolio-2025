import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Footer from '@/@/components/sections/footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const merriweather = Merriweather({
  variable: '--font-merriweather-mono',
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'swyldev | Portfolio',
  description: "swyldev's 2025 portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} scroll-smooth bg-gray-950 antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-53NMM2H6" />
        <GoogleAnalytics gaId="G-BRY05L4B7W" />
      </body>
    </html>
  )
}
