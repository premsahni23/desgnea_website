'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ecosystem from '@/components/Ecosystem'
import ForWho from '@/components/ForWho'
import Features from '@/components/Features'
import Showcase from '@/components/Showcase'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ecosystem />
      <ForWho />
      <Features />
      <Showcase />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
