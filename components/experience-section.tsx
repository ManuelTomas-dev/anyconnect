'use client'

import { Briefcase, Award, BookOpen } from 'lucide-react'

const experiences = [
  {
    category: 'Profissional',
    items: [
      {
        title: 'Desenvolvedor Fullstack & DevOps Engineer',
        company: 'Freelancer / Empresário',
        period: '2019 - Presente',
        description: 'Desenvolvimento de soluções web, mobile e infraestrutura cloud para startups e empresas estabelecidas. Especialista em arquitetura de sistemas, deploy em AWS/Azure e otimização de performance.'
      },
      {
        title: 'Desenvolvedor Senior Fullstack',
        company: 'Diversos Clientes',
        period: '2018 - 2019',
        description: 'Liderança técnica em projetos de e-commerce, SaaS e plataformas de gestão. Implementação de pipelines CI/CD, containerização com Docker e automação de processos.'
      },
      {
        title: 'Desenvolvedor Web Full Stack',
        company: 'Startups e Agências',
        period: '2016 - 2017',
        description: 'Desenvolvimento de aplicações web com MEAN/MERN stacks, integração de APIs, design responsivo e otimização de bases de dados.'
      }
    ]
  },
  {
    category: 'Formação Académica',
    items: [
      {
        title: 'Gestão de Sistemas Informáticos',
        company: 'Formação Profissional Certificada',
        period: 'Concluído',
        description: 'Gestão de TI, redes de computadores, administração de sistemas, segurança da informação e gestão de projetos.'
      },
      {
        title: 'Certificações e Formações',
        company: 'Plataformas Online',
        period: 'Contínuo',
        description: 'AWS Cloud Practitioner, DevOps, Kubernetes, Docker, Gestão de Projetos (SCRUM/Agile) e desenvolvimento com frameworks modernos.'
      }
    ]
  },
  {
    category: 'Especialidades',
    items: [
      {
        title: 'DevOps & Infraestrutura Cloud',
        company: 'AWS, Microsoft Azure, VPS',
        period: '2018 - Presente',
        description: 'Configuração e manutenção de infraestrutura cloud, CI/CD pipelines, containerização, redes de computadores e segurança.'
      },
      {
        title: 'Manutenção & Suporte de Projetos',
        company: 'Diversos Clientes',
        period: '2016 - Presente',
        description: 'Suporte técnico, correção de bugs, otimização de performance, refatoração de código e atualizações de dependências.'
      },
      {
        title: 'Gestão de Projetos',
        company: 'Metodologias Agile/Scrum',
        period: '2017 - Presente',
        description: 'Planejamento, execução e entrega de projetos. Coordenação de equipes, gestão de prazos e garantia de qualidade.'
      }
    ]
  }
]

export function ExperienceSection() {
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Profissional': return <Briefcase className="w-6 h-6" />
      case 'Formação Académica': return <BookOpen className="w-6 h-6" />
      case 'Especialidades': return <Award className="w-6 h-6" />
      default: return <Briefcase className="w-6 h-6" />
    }
  }

  return (
    <section id="experience" className="py-20 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Experiência &</span>
            <br />
            <span className="text-gradient">Formação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trajetória profissional com foco em desenvolvimento fullstack, infraestrutura cloud e gestão de projetos
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {getCategoryIcon(section.category)}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{section.category}</h3>
                <div className="flex-grow h-px bg-border" />
              </div>

              {/* Experience Items */}
              <div className="space-y-6 ml-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="relative pl-6">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                    
                    {/* Content Card */}
                    <div className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                      <p className="text-sm text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages and Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-border bg-card/50">
            <h4 className="text-lg font-semibold text-foreground mb-4">Idiomas</h4>
            <div className="space-y-3">
              {[
                { lang: 'Português', level: 'Nativo' },
                { lang: 'Inglês', level: 'Fluente' }
              ].map((item) => (
                <div key={item.lang} className="flex items-center justify-between">
                  <span className="text-foreground">{item.lang}</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card/50">
            <h4 className="text-lg font-semibold text-foreground mb-4">Áreas de Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Web Development',
                'Mobile Development',
                'Cloud DevOps',
                'System Design',
                'Database Design',
                'Project Management'
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-secondary border border-border text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
