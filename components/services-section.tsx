"use client"

import { useState } from "react"
import { 
  Wifi, 
  Play, 
  Server, 
  Shield, 
  MessageSquare,
  ArrowRight,
  Check,
  Zap,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { QuoteModal } from "./quote-modal"

const services = [
  {
    id: "internet",
    icon: Wifi,
    title: "Internet Corporativa",
    shortDesc: "Conectividade de alta performance",
    description: "Soluções de internet corporativa com várias tecnologias de acesso para garantir conectividade confiável, segura e escalável.",
    features: [
      "Fibra Óptica dedicada com SLA garantido",
      "Micro-ondas para áreas sem cobertura",
      "Internet via Satélite para zonas remotas",
      "LTE 4G Corporativo com IP fixo",
      "Monitoramento 24/7 em tempo real"
    ],
    technologies: ["Fibra Óptica", "Micro-ondas", "Satélite", "LTE 4G"],
    highlight: "A partir de 10 Mbps",
    color: "from-cyan-500 to-blue-600",
    stats: { uptime: "99.9%", speed: "10 Gbps", support: "24/7" }
  },
  {
    id: "vod",
    icon: Play,
    title: "Video on Demand",
    shortDesc: "Streaming profissional",
    description: "Plataforma robusta de Video on Demand para empresas, instituições de ensino e produtores de conteúdo.",
    features: [
      "Box personalizado com sua marca",
      "Qualidade SD, HD, Full HD e 4K",
      "Proteção DRM contra pirataria",
      "Hospedagem segura no DataCenter",
      "Integração com meios de pagamento"
    ],
    technologies: ["Streaming", "DRM", "CDN", "API"],
    highlight: "Até 4K de resolução",
    color: "from-purple-500 to-pink-600",
    stats: { quality: "4K HDR", protection: "DRM", cdn: "Global" }
  },
  {
    id: "datacenter",
    icon: Server,
    title: "Datacenter",
    shortDesc: "Infraestrutura segura e escalável",
    description: "DataCenter moderno com serviços de Colocation, Cloud e Hosting para empresas de todos os portes.",
    features: [
      "Colocation com segurança física",
      "Cloud 100% nacional e escalável",
      "Hosting dedicado ou compartilhado",
      "Redundância de energia e refrigeração",
      "Backups automáticos e segurança"
    ],
    technologies: ["Colocation", "Cloud", "Hosting", "Backup"],
    highlight: "99.99% de uptime",
    color: "from-green-500 to-emerald-600",
    stats: { tier: "Tier III", uptime: "99.99%", iso: "27001" }
  },
  {
    id: "vpn",
    icon: Shield,
    title: "VPN MPLS",
    shortDesc: "Rede privada corporativa",
    description: "Soluções de VPN MPLS com serviços L2 e L3, garantindo conexões privadas, seguras e escaláveis.",
    features: [
      "Conectividade ponto-a-ponto",
      "QoS com priorização de tráfego",
      "VPN MPLS L2 com flexibilidade",
      "VPN MPLS L3 com roteamento gerido",
      "Failover automático e redundância"
    ],
    technologies: ["MPLS L2", "MPLS L3", "QoS", "Failover"],
    highlight: "Latência mínima",
    color: "from-orange-500 to-red-600",
    stats: { encryption: "256-bit", latency: "<10ms", qos: "Garantido" }
  },
  {
    id: "ussd",
    icon: MessageSquare,
    title: "USSD",
    shortDesc: "Comunicação sem internet",
    description: "Solução USSD para comunicações interativas via celular, sem necessidade de internet ou smartphone.",
    features: [
      "Funciona sem conexão internet",
      "Compatível com qualquer celular GSM",
      "Respostas em tempo real",
      "Painel de gestão e relatórios",
      "Integração com operadoras locais"
    ],
    technologies: ["GSM", "Tempo Real", "API", "Relatórios"],
    highlight: "100% dos celulares",
    color: "from-teal-500 to-cyan-600",
    stats: { coverage: "100%", response: "<2s", availability: "99.9%" }
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0])
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined)

  const handleQuoteClick = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId)
    setShowQuoteModal(true)
  }

  return (
    <>
      <section id="services" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Nossos Serviços</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Soluções Completas de{" "}
              <span className="text-gradient">Telecomunicações</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um portfólio completo de serviços para atender todas as necessidades 
              tecnológicas da sua empresa.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeService.id === service.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <service.icon className="w-4 h-4" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div 
            id={activeService.id}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                  activeService.color
                )}>
                  <activeService.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {activeService.title}
                  </h3>
                  <p className="text-muted-foreground">{activeService.shortDesc}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {activeService.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {activeService.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => handleQuoteClick(activeService.id)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 group"
                >
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href={`#${activeService.id}-detail`}>
                  <Button variant="outline" className="rounded-full px-6 group">
                    Ver Detalhes
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Right - Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-card border border-border p-8 relative overflow-hidden">
                {/* Background gradient */}
                <div className={cn(
                  "absolute inset-0 opacity-10 bg-gradient-to-br",
                  activeService.color
                )} />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 grid-bg opacity-30" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Center Icon */}
                  <div className="flex items-center justify-center">
                    <div className={cn(
                      "w-32 h-32 rounded-3xl flex items-center justify-center bg-gradient-to-br animate-float",
                      activeService.color
                    )}>
                      <activeService.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(activeService.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 rounded-xl bg-secondary/30 border border-border">
                        <div className="text-lg font-bold text-foreground">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="mt-24">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl font-bold text-foreground">
                Todos os Serviços
              </h3>
              <Button 
                onClick={() => {
                  setSelectedServiceForQuote(undefined)
                  setShowQuoteModal(true)
                }}
                variant="outline" 
                className="rounded-full group"
              >
                Orçamento Multi-Serviço
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity",
                    service.color
                  )}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-center">{service.title}</h4>
                  <p className="text-sm text-muted-foreground text-center mb-4">{service.shortDesc}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveService(service)}
                      className="flex-1 text-xs text-primary hover:underline"
                    >
                      Ver mais
                    </button>
                    <button
                      onClick={() => handleQuoteClick(service.id)}
                      className="flex-1 text-xs text-muted-foreground hover:text-primary"
                    >
                      Orçamento
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)}
        preselectedService={selectedServiceForQuote}
      />
    </>
  )
}
