'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AIAgents from '@/components/AIAgents'
import AutomationWorkflows from '@/components/AutomationWorkflows'
import CustomSoftware from '@/components/CustomSoftware'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <AIAgents />
      <AutomationWorkflows />
      <CustomSoftware />
      <Portfolio />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
