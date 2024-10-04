import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(
        'text-black bg-white dark:text-white dark:bg-black min-h-screen flex flex-col',
        GeistSans.variable,
        GeistMono.variable
      )}>
        <div className="flex flex-col min-h-screen">
          <header className="w-full max-w-3xl mx-auto px-4 py-4">
            <nav>
              <ul className="flex space-x-4 justify-center">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
                <li><Link href="/resume" className="hover:underline">Resume</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow w-full max-w-3xl mx-auto px-4 py-8">
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
