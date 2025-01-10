import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

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
        className={`${merriweather.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
