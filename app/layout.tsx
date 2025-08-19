import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Next.js 3D Portfolio | Cinematic Experience',
  description: 'A premium 3D portfolio website with cinematic effects built with Next.js 14, React Three Fiber, and TailwindCSS',
  keywords: 'nextjs, 3d, portfolio, react three fiber, drei, postprocessing',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Next.js 3D Portfolio | Cinematic Experience',
    description: 'A premium 3D portfolio website with cinematic effects',
    type: 'website',
    locale: 'en_US',
    siteName: 'Next.js 3D Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
