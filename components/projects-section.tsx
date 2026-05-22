'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: 'Milones',
    description: 'Sistema de e-commerce com gestão de stock, afiliação e múltiplos produtos. Integração de pagamentos e dashboard administrativo.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    url: 'https://www.milones.ao/',
    type: 'E-commerce'
  },
  {
    id: 2,
    title: 'FSIL',
    description: 'Plataforma de venda de produtos de TI e câmaras de segurança com gestão de inventário, catálogo online e sistema de pedidos.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://www.fsil.ao/',
    type: 'E-commerce'
  },
  {
    id: 3,
    title: 'Switch and Plug',
    description: 'Empresa de prestação de serviços de TI e vendas com site institucional, portfólio de serviços e sistema de contacto.',
    technologies: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    url: 'https://www.switchandplug.co.ao/',
    type: 'Institucional'
  },
  {
    id: 4,
    title: 'Mundo Saudável',
    description: 'Plataforma de vendas de materiais agrícolas com catálogo, carrinho de compras e integração de pagamentos.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
    url: 'https://mundo-saudavel.vercel.app/',
    type: 'E-commerce'
  },
  {
    id: 5,
    title: 'Havre Design',
    description: 'Portfólio de arquitectura e design com showcases de projetos, galeria de imagens, orçamentos online e contacto.',
    technologies: ['React', 'Tailwind CSS', 'CMS', 'Responsive Design'],
    url: 'https://www.havredesign.ao/',
    type: 'Portfólio'
  },
  {
    id: 6,
    title: 'Cursus',
    description: 'Plataforma de cursos online com sistema de pagamento integrado, perfil de alunos e gestão de conteúdo.',
    technologies: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://www.cursus.ao/',
    type: 'E-learning'
  },
  {
    id: 7,
    title: 'CondoFlow',
    description: 'Sistema de gestão de condomínios com módulos de pagamento de faturas, segurança, registros de moradores e visitas.',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'JWT', 'RLS'],
    url: 'https://condoflow.netag.ao/',
    type: 'SaaS'
  },
  {
    id: 8,
    title: 'Mwanganza',
    description: 'Plataforma de gestão de centro médico com perfis de admin, paciente, farmacêutico, doutor e recepcionista. Gestão de faturas, consultas, exames e farmácia.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Charts'],
    url: 'https://mwanganza.vercel.app/',
    type: 'Healthcare'
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-b border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Portfólio de</span>
            <br />
            <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos projetos mais significativos desenvolvidos ao longo da minha carreira
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col p-6 rounded-2xl border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {project.type}
                </span>
                <div className="flex gap-2">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      title="Visit Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-secondary border border-border text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Visit Button */}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6">
                <Button 
                  variant="outline"
                  className="w-full"
                >
                  Visitar Projeto
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
