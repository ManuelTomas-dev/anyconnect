"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  servicos: [
    { name: "Desenvolvimento Web", href: "#services" },
    { name: "Desenvolvimento Mobile", href: "#services" },
    { name: "Backend & APIs", href: "#services" },
    { name: "DevOps & Infraestrutura", href: "#services" },
  ],
  sobre: [
    { name: "Sobre Mim", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#experience" },
  ],
  links: [
    { name: "GitHub", href: "https://github.com/MDT-dev", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/manuel-diogo-tomas-5001a32a6/", external: true },
    { name: "Email", href: "mailto:manueldiogotomas@gmail.com" },
    { name: "WhatsApp", href: "https://wa.me/244957844787", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center border border-primary/30">
                <span className="text-lg font-bold text-white">MDT</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Manuel<span className="text-primary">.</span>Dev
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Fullstack Developer & DevOps Engineer especializado em soluções web, 
              mobile e infraestrutura cloud escalável.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Disponível para projetos</span>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Sobre</h4>
            <ul className="space-y-3">
              {footerLinks.sobre.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Conecte-se</h4>
            <ul className="space-y-3">
              {footerLinks.links.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Manuel Diogo Tomás. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">Made with Next.js & Tailwind</span>
            <a 
              href="https://github.com/MDT-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              github.com/MDT-dev
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
