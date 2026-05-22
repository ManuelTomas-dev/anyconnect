'use client'

import { 
  Code2, Database, Cloud, Smartphone, GitBranch, Zap,
  Brackets, Server, Cpu, Package, GitFork, Terminal
} from 'lucide-react'

interface Skill {
  name: string
  icon?: any
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
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Responsive Design', icon: '📱' }
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Nest.js', icon: '🐱' },
      { name: 'Express.js', icon: '⚙️' },
      { name: 'Python', icon: '🐍' },
      { name: 'Flask', icon: '🍶' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'PHP', icon: '🐘' },
      { name: 'REST APIs', icon: '🔌' }
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Microsoft 365', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Linux', icon: '🐧' },
      { name: 'VPS Management', icon: '🖥️' },
      { name: 'Networking', icon: '🌐' },
      { name: 'CI/CD', icon: '🔄' }
    ]
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    skills: [
      { name: 'React Native', icon: '⚛️' },
      { name: 'Mobile Optimization', icon: '📱' },
      { name: 'Cross-platform', icon: '🔀' },
      { name: 'PWA', icon: '📲' }
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Redis', icon: '⚡' }
    ]
  },
  {
    category: 'Tools & Services',
    icon: GitBranch,
    skills: [
      { name: 'Git/GitHub', icon: '🐙' },
      { name: 'Vercel', icon: '▲' },
      { name: 'NPM/Yarn', icon: '📦' },
      { name: 'Testing', icon: '✅' },
      { name: 'Project Management', icon: '📋' }
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
                  {category.skills.map((skill) => (
                    <span 
                      key={skill.name}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground border border-border hover:border-primary/50 transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
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
