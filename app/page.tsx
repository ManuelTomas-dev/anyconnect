import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ServiceDetailSection } from "@/components/service-detail-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ClientsSection } from "@/components/clients-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      
      {/* Service Detail Sections */}
      <div id="services-detail" className="border-t border-border">
        <ServiceDetailSection serviceId="internet" />
        <div className="border-t border-border" />
        <ServiceDetailSection serviceId="vod" />
        <div className="border-t border-border" />
        <ServiceDetailSection serviceId="datacenter" />
        <div className="border-t border-border" />
        <ServiceDetailSection serviceId="vpn" />
        <div className="border-t border-border" />
        <ServiceDetailSection serviceId="ussd" />
      </div>
      
      <TestimonialsSection />
      <ClientsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
