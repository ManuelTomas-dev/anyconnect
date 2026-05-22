'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiAngular, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress, SiPython, SiFlask, SiFastapi, SiPhp,
  SiDocker, SiLinux, SiGit, SiGithub, SiNpm,
  SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiRedis, SiVercel
} from 'react-icons/si'

interface Technology {
  name: string
  Icon: any
}

interface Project {
  id: number
  title: string
  description: string
  technologies: Technology[]
  url: string
  type: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Milones',
    description: 'Sistema de e-commerce com gestão de stock, afiliação e múltiplos produtos. Integração de pagamentos e dashboard administrativo.',
    image: '/projects/milones.png',
    technologies: [
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Stripe', Icon: SiNextdotjs },
      { name: 'Tailwind CSS', Icon: SiTailwindcss }
    ],
    url: 'https://www.milones.ao/',
    type: 'E-commerce'
  },
  {
    id: 2,
    title: 'FSIL',
    description: 'Plataforma de venda de produtos de TI e câmaras de segurança com gestão de inventário, catálogo online e sistema de pedidos.',
    image: '/projects/fsil.png',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'Express.js', Icon: SiExpress },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'Tailwind CSS', Icon: SiTailwindcss }
    ],
    url: 'https://www.fsil.ao/',
    type: 'E-commerce'
  },
  {
    id: 3,
    title: 'Switch and Plug',
    description: 'Empresa de prestação de serviços de TI e vendas com site institucional, portfólio de serviços e sistema de contacto.',
    image: '/projects/switchandplug.png',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Firebase', Icon: SiFirebase },
      { name: 'Tailwind CSS', Icon: SiTailwindcss }
    ],
    url: 'https://www.switchandplug.co.ao/',
    type: 'Institucional'
  },
  {
    id: 4,
    title: 'Mundo Saudável',
    description: 'Plataforma de vendas de materiais agrícolas com catálogo, carrinho de compras e integração de pagamentos.',
    image: '/projects/mundo-saudavel.jpg',
    technologies: [
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Stripe', Icon: SiNextdotjs },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'Vercel', Icon: SiVercel }
    ],
    url: 'https://mundo-saudavel.vercel.app/',
    type: 'E-commerce'
  },
  {
    id: 5,
    title: 'Havre Design',
    description: 'Portfólio de arquitectura e design com showcases de projetos, galeria de imagens, orçamentos online e contacto.',
    image: '/projects/havredesign.png',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'MongoDB', Icon: SiMongodb }
    ],
    url: 'https://www.havredesign.ao/',
    type: 'Portfólio'
  },
  {
    id: 6,
    title: 'Cursus',
    description: 'Plataforma de cursos online com sistema de pagamento integrado, perfil de alunos e gestão de conteúdo.',
    image: '/projects/cursus.png',
    technologies: [
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Stripe', Icon: SiNextdotjs },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'Tailwind CSS', Icon: SiTailwindcss }
    ],
    url: 'https://www.cursus.ao/',
    type: 'E-learning'
  },
  {
    id: 7,
    title: 'CondoFlow',
    description: 'Sistema de gestão de condomínios com módulos de pagamento de faturas, segurança, registros de moradores e visitas.',
    image: '/projects/condoflow.png',
    technologies: [
      { name: 'Angular', Icon: SiAngular },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Express.js', Icon: SiExpress }
    ],
    url: 'https://condoflow.netag.ao/',
    type: 'SaaS'
  },
  {
    id: 8,
    title: 'Mwanganza',
    description: 'Plataforma de gestão de centro médico com perfis de admin, paciente, farmacêutico, doutor e recepcionista. Gestão de faturas, consultas, exames e farmácia.',
    image: '/projects/mwanganza.png',
    technologies: [
      { name: 'React', Icon: SiReact },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Express.js', Icon: SiExpress }
    ],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-2xl border border-border bg-background overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {project.type}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.technologies.slice(0, 3).map((tech) => {
                    const TechIcon = tech.Icon
                    return (
                      <span 
                        key={tech.name}
                        className="px-2 py-1 text-xs rounded bg-secondary text-foreground flex items-center gap-1"
                      >
                        <TechIcon className="w-3 h-3" />
                        <span className="hidden sm:inline">{tech.name}</span>
                      </span>
                    )
                  })}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
