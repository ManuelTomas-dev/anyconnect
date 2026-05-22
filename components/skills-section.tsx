'use client'

import { Code2, Database, Cloud, Smartphone, GitBranch, Server } from 'lucide-react'
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiAngular, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiExpress, SiPython, SiFlask, SiFastapi, SiPhp,
  SiDocker, SiLinux, SiGit, SiGithub, SiNpm,
  SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiRedis, SiVercel
} from 'react-icons/si'

interface Skill {
  name: string
  Icon?: any
}

interface SkillCategory {
  category: string
  icon: any
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'React.js', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Angular', Icon: SiAngular },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Responsive Design', Icon: Smartphone }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Nest.js', Icon: SiNestjs },
      { name: 'Express.js', Icon: SiExpress },
      { name: 'Python', Icon: SiPython },
      { name: 'Flask', Icon: SiFlask },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'PHP', Icon: SiPhp },
      { name: 'REST APIs', Icon: Code2 }
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'AWS', Icon: Cloud },
      { name: 'Microsoft 365', Icon: Code2 },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Linux', Icon: SiLinux },
      { name: 'VPS Management', Icon: Server },
      { name: 'Networking', Icon: Cloud },
      { name: 'CI/CD', Icon: SiGit }
    ]
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    skills: [
      { name: 'React Native', Icon: SiReact },
      { name: 'Mobile Optimization', Icon: Smartphone },
      { name: 'Cross-platform', Icon: Code2 },
      { name: 'PWA', Icon: Code2 }
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'Firebase', Icon: SiFirebase },
      { name: 'Redis', Icon: SiRedis }
    ]
  },
  {
    category: 'Tools & Services',
    icon: GitBranch,
    skills: [
      { name: 'Git/GitHub', Icon: SiGithub },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'NPM', Icon: SiNpm },
      { name: 'Testing', Icon: Code2 },
      { name: 'Project Management', Icon: Code2 }
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Tecnologias e</span>
            <br />
            <span className="text-gradient">Competências</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stack técnico completo para desenvolvimento web, mobile e infraestrutura cloud
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div 
                key={category.category}
                className="group p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.Icon
                    return (
                      <span 
                        key={skill.name}
                        className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground border border-border hover:border-primary/50 transition-colors flex items-center gap-1.5"
                      >
                        <SkillIcon className="w-4 h-4" />
                        {skill.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Linguagens', value: '5+' },
            { label: 'Frameworks', value: '10+' },
            { label: 'Ferramentas', value: '15+' },
            { label: 'Serviços Cloud', value: 'AWS, Azure' }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-border bg-card/50">
              <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
