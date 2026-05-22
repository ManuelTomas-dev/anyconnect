"use client"

import { useState } from "react"
import { 
  Wifi, Play, Server, Shield, MessageSquare, 
  ArrowRight, Check, Zap, Globe, Lock, Cloud, 
  Radio, ChevronRight, Star, Users, Building2,
  Clock, HeadphonesIcon, FileCheck, TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { QuoteModal } from "./quote-modal"

const servicesData = {
  internet: {
    id: "internet",
    icon: Wifi,
    title: "Internet Corporativa",
    subtitle: "Conectividade de Alta Performance para Empresas",
    description: "Oferecemos soluções de internet corporativa com múltiplas tecnologias de acesso, garantindo conectividade confiável, segura e escalável para empresas de todos os portes.",
    heroImage: "/images/internet-hero.jpg",
    color: "from-cyan-500 to-blue-600",
    stats: [
      { value: "99.9%", label: "Uptime Garantido" },
      { value: "10Gbps", label: "Velocidade Máxima" },
      { value: "24/7", label: "Suporte Técnico" },
      { value: "<5ms", label: "Latência Média" }
    ],
    technologies: [
      {
        name: "Fibra Óptica",
        description: "Conexão dedicada com velocidades simétricas de até 10 Gbps",
        icon: Zap,
        features: ["Velocidade simétrica", "Baixa latência", "Alta disponibilidade", "SLA garantido"]
      },
      {
        name: "Micro-ondas",
        description: "Solução wireless para áreas sem cobertura de fibra",
        icon: Radio,
        features: ["Instalação rápida", "Sem necessidade de obras", "Escalável", "Redundância"]
      },
      {
        name: "Satélite",
        description: "Conectividade para zonas remotas e backup de emergência",
        icon: Globe,
        features: ["Cobertura total", "Backup redundante", "Alta disponibilidade", "Mobilidade"]
      },
      {
        name: "LTE 4G/5G",
        description: "Internet móvel corporativa com IP fixo",
        icon: Cloud,
        features: ["IP fixo", "Alta mobilidade", "Failover automático", "Gestão centralizada"]
      }
    ],
    plans: [
      { name: "Starter", speed: "10 Mbps", price: "45.000", features: ["IP fixo", "Suporte 8h-18h", "SLA 99%"] },
      { name: "Business", speed: "50 Mbps", price: "120.000", features: ["IP fixo", "Suporte 24/7", "SLA 99.5%", "Monitoramento"], popular: true },
      { name: "Enterprise", speed: "100+ Mbps", price: "Sob consulta", features: ["IPs múltiplos", "Suporte dedicado", "SLA 99.9%", "NOC dedicado"] }
    ],
    useCases: [
      "Escritórios e sedes corporativas",
      "Filiais e pontos de venda",
      "Indústrias e fábricas",
      "Hospitais e clínicas",
      "Instituições de ensino"
    ]
  },
  vod: {
    id: "vod",
    icon: Play,
    title: "Video on Demand",
    subtitle: "Plataforma de Streaming Profissional",
    description: "Plataforma robusta de Video on Demand para empresas, instituições de ensino, produtores de conteúdo e operadores de TV. Tecnologia de ponta com proteção DRM.",
    heroImage: "/images/vod-hero.jpg",
    color: "from-purple-500 to-pink-600",
    stats: [
      { value: "4K", label: "Resolução Máxima" },
      { value: "DRM", label: "Proteção Ativa" },
      { value: "99.9%", label: "Disponibilidade" },
      { value: "CDN", label: "Global" }
    ],
    technologies: [
      {
        name: "Streaming Adaptativo",
        description: "HLS e DASH com ajuste automático de qualidade",
        icon: Play,
        features: ["Múltiplas resoluções", "Ajuste automático", "Buffering mínimo", "Compatibilidade total"]
      },
      {
        name: "Proteção DRM",
        description: "Widevine, FairPlay e PlayReady para segurança total",
        icon: Lock,
        features: ["Anti-pirataria", "Controle de acesso", "Marca d'água", "Geo-blocking"]
      },
      {
        name: "CDN Integrado",
        description: "Distribuição global com baixa latência",
        icon: Globe,
        features: ["Cache inteligente", "Load balancing", "Alta performance", "Escalabilidade"]
      },
      {
        name: "Box Personalizado",
        description: "Set-top box com sua marca e identidade visual",
        icon: Server,
        features: ["Marca própria", "Interface customizada", "Controle remoto", "Apps integradas"]
      }
    ],
    plans: [
      { name: "Basic", speed: "1.000 horas", price: "150.000", features: ["HD", "DRM básico", "Painel admin"] },
      { name: "Professional", speed: "5.000 horas", price: "450.000", features: ["Full HD", "DRM avançado", "API completa", "Analytics"], popular: true },
      { name: "Broadcast", speed: "Ilimitado", price: "Sob consulta", features: ["4K HDR", "DRM enterprise", "White-label", "Suporte dedicado"] }
    ],
    useCases: [
      "Operadores de TV por assinatura",
      "Produtoras de conteúdo",
      "Plataformas de e-learning",
      "Eventos corporativos",
      "Igrejas e instituições"
    ]
  },
  datacenter: {
    id: "datacenter",
    icon: Server,
    title: "Datacenter",
    subtitle: "Infraestrutura Segura e Escalável",
    description: "DataCenter moderno com certificações internacionais, oferecendo serviços de Colocation, Cloud Computing e Hosting para empresas de todos os portes em Angola.",
    heroImage: "/images/datacenter-hero.jpg",
    color: "from-green-500 to-emerald-600",
    stats: [
      { value: "Tier III", label: "Certificação" },
      { value: "99.99%", label: "Uptime" },
      { value: "N+1", label: "Redundância" },
      { value: "ISO", label: "27001" }
    ],
    technologies: [
      {
        name: "Colocation",
        description: "Hospede seus servidores em ambiente seguro e monitorado",
        icon: Server,
        features: ["Racks dedicados", "Energia redundante", "Refrigeração 24/7", "Acesso controlado"]
      },
      {
        name: "Cloud Computing",
        description: "Infraestrutura cloud 100% nacional e escalável",
        icon: Cloud,
        features: ["IaaS completo", "Auto-scaling", "Pay-as-you-go", "Multi-region"]
      },
      {
        name: "Hosting",
        description: "Hospedagem web dedicada ou compartilhada",
        icon: Globe,
        features: ["SSD NVMe", "SSL gratuito", "Backups diários", "cPanel/Plesk"]
      },
      {
        name: "Backup & DR",
        description: "Soluções de backup e disaster recovery",
        icon: Lock,
        features: ["Backup offsite", "Replicação", "RTO/RPO baixos", "Testes regulares"]
      }
    ],
    plans: [
      { name: "Rack 1/4", speed: "10U", price: "180.000", features: ["1 Gbps", "2 kVA", "Acesso 24/7"] },
      { name: "Rack 1/2", speed: "21U", price: "320.000", features: ["2 Gbps", "4 kVA", "Acesso dedicado", "NOC"], popular: true },
      { name: "Rack Full", speed: "42U", price: "Sob consulta", features: ["10 Gbps", "8+ kVA", "Suporte onsite", "SLA premium"] }
    ],
    useCases: [
      "Bancos e instituições financeiras",
      "Empresas de telecomunicações",
      "E-commerce e marketplaces",
      "Governo e setor público",
      "Empresas de tecnologia"
    ]
  },
  vpn: {
    id: "vpn",
    icon: Shield,
    title: "VPN MPLS",
    subtitle: "Rede Privada Corporativa Segura",
    description: "Soluções de VPN MPLS com serviços L2 e L3, garantindo conexões privadas, seguras e escaláveis entre todas as unidades da sua empresa com QoS garantido.",
    heroImage: "/images/vpn-hero.jpg",
    color: "from-orange-500 to-red-600",
    stats: [
      { value: "256-bit", label: "Encriptação" },
      { value: "<10ms", label: "Latência" },
      { value: "QoS", label: "Garantido" },
      { value: "100%", label: "Privacidade" }
    ],
    technologies: [
      {
        name: "MPLS L2",
        description: "Conexão ponto-a-ponto transparente em camada 2",
        icon: Globe,
        features: ["Ethernet transparente", "Baixa latência", "QoS nativo", "Flexibilidade"]
      },
      {
        name: "MPLS L3",
        description: "VPN com roteamento gerido pela operadora",
        icon: Shield,
        features: ["Roteamento gerido", "Multi-site", "Escalável", "Hub-and-spoke"]
      },
      {
        name: "SD-WAN",
        description: "Rede definida por software com gestão centralizada",
        icon: Cloud,
        features: ["Gestão central", "Multi-link", "Otimização", "Zero-touch"]
      },
      {
        name: "Failover",
        description: "Redundância automática entre links",
        icon: Zap,
        features: ["Failover <1s", "Multi-path", "Load balance", "Monitoramento"]
      }
    ],
    plans: [
      { name: "Connect", speed: "2 sites", price: "85.000", features: ["10 Mbps/site", "QoS básico", "Suporte 8h-18h"] },
      { name: "Business", speed: "5 sites", price: "280.000", features: ["50 Mbps/site", "QoS avançado", "Suporte 24/7", "SD-WAN"], popular: true },
      { name: "Enterprise", speed: "Ilimitado", price: "Sob consulta", features: ["100+ Mbps", "QoS premium", "NOC dedicado", "SLA 99.99%"] }
    ],
    useCases: [
      "Redes de agências bancárias",
      "Cadeias de retalho",
      "Empresas com filiais",
      "Call centers distribuídos",
      "Redes de franquias"
    ]
  },
  ussd: {
    id: "ussd",
    icon: MessageSquare,
    title: "USSD",
    subtitle: "Comunicação Sem Internet",
    description: "Solução USSD para comunicações interativas via celular, funcionando em qualquer telefone GSM sem necessidade de internet ou smartphone. Ideal para serviços financeiros e utilidades.",
    heroImage: "/images/ussd-hero.jpg",
    color: "from-teal-500 to-cyan-600",
    stats: [
      { value: "100%", label: "Celulares GSM" },
      { value: "<2s", label: "Tempo Resposta" },
      { value: "0", label: "Internet Necessária" },
      { value: "99.9%", label: "Disponibilidade" }
    ],
    technologies: [
      {
        name: "Gateway USSD",
        description: "Conexão direta com operadoras móveis angolanas",
        icon: Radio,
        features: ["Multi-operadora", "Alta capacidade", "Baixa latência", "Redundância"]
      },
      {
        name: "Menus Dinâmicos",
        description: "Fluxos interativos personalizáveis",
        icon: MessageSquare,
        features: ["Arrastar e soltar", "Lógica condicional", "Multi-idioma", "A/B testing"]
      },
      {
        name: "API REST",
        description: "Integração fácil com seus sistemas",
        icon: Globe,
        features: ["RESTful", "Webhooks", "SDK", "Documentação"]
      },
      {
        name: "Painel de Gestão",
        description: "Dashboard completo para gestão e analytics",
        icon: TrendingUp,
        features: ["Relatórios", "Analytics", "Exportação", "Alertas"]
      }
    ],
    plans: [
      { name: "Starter", speed: "10.000 sessões", price: "45.000", features: ["1 código curto", "Painel básico", "API"] },
      { name: "Business", speed: "100.000 sessões", price: "180.000", features: ["3 códigos curtos", "Painel completo", "Webhooks", "Suporte prioritário"], popular: true },
      { name: "Enterprise", speed: "Ilimitado", price: "Sob consulta", features: ["Códigos ilimitados", "White-label", "SLA dedicado", "Integração custom"] }
    ],
    useCases: [
      "Mobile banking e mobile money",
      "Consultas de saldo e pagamentos",
      "Votações e enquetes",
      "Atendimento ao cliente",
      "Alertas e notificações"
    ]
  }
}

interface ServiceDetailSectionProps {
  serviceId: keyof typeof servicesData
}

export function ServiceDetailSection({ serviceId }: ServiceDetailSectionProps) {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const service = servicesData[serviceId]
  
  if (!service) return null

  return (
    <>
      <section id={`${serviceId}-detail`} className="relative py-16 sm:py-24">
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                  service.color
                )}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {service.title}
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-primary font-medium mb-4">{service.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12"
                >
                  Pedir Orçamento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="rounded-full px-8 h-12">
                  Falar com Especialista
                </Button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {service.stats.map((stat, i) => (
                <div 
                  key={i}
                  className={cn(
                    "p-6 rounded-2xl bg-card border border-border text-center",
                    i === 0 && "col-span-2 sm:col-span-1"
                  )}
                >
                  <div className={cn(
                    "text-3xl sm:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2",
                    service.color
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Tecnologias e Recursos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça as tecnologias que compõem nossa solução de {service.title.toLowerCase()}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.technologies.map((tech, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br",
                    service.color
                  )}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Planos e Preços
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Escolha o plano ideal para as necessidades da sua empresa
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {service.plans.map((plan, i) => (
                <div 
                  key={i}
                  className={cn(
                    "relative p-8 rounded-3xl border transition-all",
                    plan.popular 
                      ? "bg-primary/5 border-primary" 
                      : "bg-card border-border hover:border-primary/30"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Mais Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.speed}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price.includes("consulta") ? "" : "Kz "}
                      {plan.price}
                    </span>
                    {!plan.price.includes("consulta") && (
                      <span className="text-muted-foreground">/mês</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => setShowQuoteModal(true)}
                    className={cn(
                      "w-full rounded-full h-12",
                      plan.popular 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    )}
                  >
                    Solicitar Proposta
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Casos de Uso
                </h2>
                <p className="text-muted-foreground mb-6">
                  Nossa solução de {service.title.toLowerCase()} é ideal para diversos segmentos e necessidades empresariais.
                </p>
                <ul className="space-y-3">
                  {service.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <HeadphonesIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Suporte Especializado</h4>
                      <p className="text-sm text-muted-foreground">Equipa técnica 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">SLA Garantido</h4>
                      <p className="text-sm text-muted-foreground">Contrato com garantias</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setShowQuoteModal(true)}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-lg"
                >
                  Solicitar Demonstração
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)}
        preselectedService={serviceId}
      />
    </>
  )
}

export { servicesData }
