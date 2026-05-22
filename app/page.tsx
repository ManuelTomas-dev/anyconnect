import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { DevelopmentServices } from "@/components/development-services"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <DevelopmentServices />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
