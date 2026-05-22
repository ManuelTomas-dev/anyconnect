"use client"

import { Wifi, Radio, Satellite, Smartphone, Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const technologies = [
  {
    icon: Wifi,
    name: "Fibra Optica",
    description: "Conexao de alta velocidade com banda simetrica dedicada",
    features: ["Ate 1 Gbps", "Baixa latencia", "SLA garantido"]
  },
  {
    icon: Radio,
    name: "Micro-ondas",
    description: "Ideal para areas sem cobertura de fibra",
    features: ["Instalacao rapida", "Ponto-a-ponto", "Alta estabilidade"]
  },
  {
    icon: Satellite,
    name: "Satelite",
    description: "Cobertura em zonas remotas e de dificil acesso",
    features: ["Cobertura nacional", "Missao critica", "Operacao continua"]
  },
  {
    icon: Smartphone,
    name: "LTE 4G",
    description: "Conexao movel com ativacao imediata",
    features: ["IP fixo opcional", "Backup de rede", "SD-WAN ready"]
  },
]

export function InternetSection() {
  return (
    <section id="internet" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Wifi className="w-4 h-4 text-cyan-500" />
              <span className="text-xs font-medium text-cyan-500 uppercase tracking-wider">Internet Corporativa</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Conectividade Inteligente
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Soluções de internet sob medida com várias tecnologias de acesso para garantir 
              conectividade confiável em qualquer cenário de negócio.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-cyan-500" />
                <span>A partir de 10 Mbps</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-cyan-500" />
                <span>Monitoramento 24/7</span>
              </div>
            </div>
            
            <Button className="bg-cyan-500 text-white hover:bg-cyan-600 rounded-full">
              Solicitar Estudo Tecnico
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {technologies.map((tech) => (
              <div 
                key={tech.name}
                className="p-5 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                  <tech.icon className="w-5 h-5 text-cyan-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                <div className="flex flex-wrap gap-1">
                  {tech.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
