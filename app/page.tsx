import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Loader from '@/components/ui/Loader'

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<Loader />}>
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}