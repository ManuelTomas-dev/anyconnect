"use client"

import { Building2, Award, Clock, Shield } from "lucide-react"

const clients = [
  "Sonangol",
  "TAAG",
  "BFA",
  "BAI",
  "Unitel",
  "ENDE",
  "Multichoice",
  "Total",
  "Chevron",
  "BP",
  "Ensa",
  "BIC"
]

const stats = [
  { icon: Shield, value: "99.9%", label: "Uptime SLA" },
  { icon: Clock, value: "<5ms", label: "Latencia Media" },
  { icon: Award, value: "ISO 27001", label: "Certificado" },
  { icon: Building2, value: "10+ Anos", label: "Experiencia" },
]

export function ClientsSection() {
  return (
    <section id="parceiros" className="py-20 border-b border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Parceiros</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Empresas que Confiam em Nos
          </h3>
          <p className="text-muted-foreground">
            Mais de 500 clientes corporativos em toda Angola
          </p>
        </div>
        
        {/* Logo Marquee */}
        <div className="relative overflow-hidden mb-16">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex items-center gap-8 animate-marquee">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div 
                key={`${client}-${i}`}
                className="flex-shrink-0 h-20 px-10 rounded-2xl bg-card border border-border flex items-center justify-center min-w-[180px] hover:border-primary/30 transition-colors"
              >
                <span className="text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
