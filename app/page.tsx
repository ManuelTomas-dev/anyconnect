import { Header } from "@/components/my-modules/header"
import { Hero } from "@/components/my-modules/hero"
import { SkillsSection } from "@/components/my-modules/skills-section"
import { ProjectsSection } from "@/components/my-modules/projects-section"
import { ExperienceSection } from "@/components/my-modules/experience-section"
import { DevelopmentServices } from "@/components/my-modules/development-services"
import { ContactSection } from "@/components/my-modules/contact-section"
import { Footer } from "@/components/my-modules/footer"
import { WhatsAppButton } from "@/components/my-modules/whatsapp-button"

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
