"use client"

import { Server, Cloud, HardDrive, Shield, Zap, Lock, RefreshCw, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Server,
    name: "Colocation",
    description: "Hospede seus servidores em ambiente seguro, monitorado e com redundancia completa.",
    features: ["Acesso fisico controlado", "Alta disponibilidade", "Escalabilidade sob demanda"]
  },
  {
    icon: Cloud,
    name: "Cloud",
    description: "Infraestrutura em nuvem 100% nacional para aplicacoes criticas e backups.",
    features: ["Solucoes personalizadas", "SSD de alta performance", "Painel intuitivo"]
  },
  {
    icon: HardDrive,
    name: "Hosting",
    description: "Hospedagem dedicada e compartilhada com suporte tecnico completo.",
    features: ["Ambientes dedicados", "Monitoramento continuo", "Backups automaticos"]
  },
]

const securityFeatures = [
  { icon: Shield, label: "Protecao DDoS" },
  { icon: Lock, label: "Biometria" },
  { icon: RefreshCw, label: "Redundancia" },
  { icon: Headphones, label: "Suporte 24/7" },
]

export function DatacenterSection() {
  return (
    <section id="datacenter" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Server className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-500 uppercase tracking-wider">Datacenter</span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Infraestrutura de Classe Mundial
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DataCenter moderno, seguro e escalavel para atender as necessidades 
            tecnologicas de empresas de todos os portes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div 
              key={service.name}
              className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">{service.name}</h4>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="w-3 h-3 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Seguranca e Infraestrutura</h4>
              <div className="flex flex-wrap gap-4">
                {securityFeatures.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <feature.icon className="w-4 h-4 text-emerald-500" />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full flex-shrink-0">
              Solicitar Cotacao
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
