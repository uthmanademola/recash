"use client"

import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AssetsCarousel from "@/components/assets-carousel"
import HowItWorks from "@/components/how-it-works"
import WhyChooseReCash from "@/components/why-choose-recash"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import WhatsAppCTA from "@/components/whatsapp-cta"
import Footer from "@/components/footer"
import FloatingWhatsAppCTA from "@/components/floating-whatsapp-cta"

// Dynamic import with GA4 tracking
const Analytics = dynamic(() => import("@/components/analytics"), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AssetsCarousel />
      <HowItWorks />
      <WhyChooseReCash />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsAppCTA />
      <Analytics />
    </main>
  )
}
