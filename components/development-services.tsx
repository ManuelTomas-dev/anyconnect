'use client'

import { Code, Smartphone, Cloud, Wrench, Zap, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'web',
    icon: Code,
    emoji: '🌐',
    title: 'Desenvolvimento Web',
    description: 'Aplicações web modernas, responsivas e escaláveis usando as tecnologias mais recentes.',
    features: [
      { name: 'React.js / Next.js', emoji: '⚛️' },
      { name: 'Angular / Vue.js', emoji: '🅰️' },
      { name: 'Tailwind CSS', emoji: '🎨' },
      { name: 'Responsive Design', emoji: '📱' },
      { name: 'Performance Optimization', emoji: '⚡' },
      { name: 'SEO Friendly', emoji: '🔍' }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    emoji: '📱',
    title: 'Desenvolvimento Mobile',
    description: 'Aplicações mobile nativas e cross-platform para iOS e Android.',
    features: [
      { name: 'React Native', emoji: '⚛️' },
      { name: 'Cross-platform', emoji: '🔀' },
      { name: 'Native Performance', emoji: '⚡' },
      { name: 'App Store Ready', emoji: '📦' },
      { name: 'Push Notifications', emoji: '🔔' },
      { name: 'Offline Support', emoji: '📡' }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'backend',
    icon: Code,
    emoji: '⚙️',
    title: 'Backend & APIs',
    description: 'Servidores robuustos, APIs REST/GraphQL e lógica de negócio escalável.',
    features: [
      { name: 'Node.js / Express', emoji: '🟢' },
      { name: 'Nest.js / Fastify', emoji: '🐱' },
      { name: 'Python / Flask', emoji: '🐍' },
      { name: 'Database Design', emoji: '🗄️' },
      { name: 'Authentication', emoji: '🔐' },
      { name: 'Caching & Performance', emoji: '⚡' }
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'devops',
    icon: Cloud,
    emoji: '☁️',
    title: 'DevOps & Infraestrutura',
    description: 'Configuração, deploy e manutenção de infraestrutura cloud e sistemas.',
    features: [
      { name: 'AWS / Azure / VPS', emoji: '☁️' },
      { name: 'Docker & Containerization', emoji: '🐳' },
      { name: 'CI/CD Pipelines', emoji: '🔄' },
      { name: 'Linux Server Management', emoji: '🐧' },
      { name: 'Networking', emoji: '🌐' },
      { name: 'Security & Monitoring', emoji: '🔒' }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'maintenance',
    icon: Wrench,
    emoji: '🔧',
    title: 'Manutenção & Suporte',
    description: 'Suporte técnico, correção de bugs e otimização de projetos existentes.',
    features: [
      { name: 'Bug Fixing', emoji: '🐛' },
      { name: 'Performance Tuning', emoji: '⚡' },
      { name: 'Code Refactoring', emoji: '♻️' },
      { name: 'Security Updates', emoji: '🔒' },
      { name: '24/7 Support', emoji: '📞' },
      { name: 'Documentation', emoji: '📚' }
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'consulting',
    icon: Eye,
    emoji: '💡',
    title: 'Consultoria Técnica',
    description: 'Planejamento arquitetural, escolha de tecnologias e orientação de projetos.',
    features: [
      { name: 'Architecture Design', emoji: '🏗️' },
      { name: 'Technology Selection', emoji: '🔍' },
      { name: 'Code Review', emoji: '👀' },
      { name: 'Best Practices', emoji: '⭐' },
      { name: 'Team Training', emoji: '🎓' },
      { name: 'Project Planning', emoji: '📋' }
    ],
    color: 'from-indigo-500 to-blue-500'
  }
]

export function DevelopmentServices() {
  return (
    <section id="services" className="py-20 border-b border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Serviços de</span>
            <br />
            <span className="text-gradient">Desenvolvimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de desenvolvimento, desde conceito até produção e manutenção contínua
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div 
                key={service.id}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-2">
                      <span className="text-base">{feature.emoji}</span>
                      <span className="text-sm text-foreground/80">{feature.name}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href="#contact">
                  <Button 
                    variant="outline"
                    className="w-full group-hover:border-primary"
                  >
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            )
          })}
        </div>

        {/* Process */}
        <div className="mt-20 p-8 rounded-2xl border border-border bg-card/50">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Processo de Trabalho</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', emoji: '🔍', title: 'Descoberta', desc: 'Entender suas necessidades e objetivos' },
              { step: '02', emoji: '📋', title: 'Planejamento', desc: 'Definir arquitetura e tecnologias' },
              { step: '03', emoji: '💻', title: 'Desenvolvimento', desc: 'Implementar com qualidade e rigor' },
              { step: '04', emoji: '🚀', title: 'Deploy & Suporte', desc: 'Lançamento e manutenção contínua' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
