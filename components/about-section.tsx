"use client"

import { CheckCircle2, Award, Users, Globe } from "lucide-react"

const features = [
  "Infraestrutura nacional de alta capacidade",
  "Equipe tecnica certificada e experiente",
  "SLA garantido com resposta rapida",
  "Suporte tecnico 24 horas por dia",
  "Solucoes personalizadas para cada cliente",
  "Datacenter proprio com redundancia total",
]

const highlights = [
  {
    icon: Award,
    title: "Certificacao INACOM",
    description: "Operadora licenciada pelo Instituto Angolano das Comunicacoes"
  },
  {
    icon: Users,
    title: "Foco no Cliente",
    description: "Atendimento consultivo e solucoes sob medida para seu negocio"
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    description: "Presenca em todo territorio angolano com infraestrutura propria"
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Sobre Nos</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Conectando Angola{" "}
              <span className="text-gradient">ao Mundo Digital</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A AnyConnect e uma empresa de telecomunicacoes angolana, certificada pelo INACOM, 
              especializada em fornecer solucoes completas de conectividade e infraestrutura digital 
              para empresas de todos os portes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Trust Badge */}
            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-muted-foreground">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">+500 Empresas Confiam em Nos</p>
                  <p className="text-xs text-muted-foreground">Junte-se aos nossos clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
