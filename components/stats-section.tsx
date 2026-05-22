"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Building2, Globe, Award, TrendingUp, Shield, Clock, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { 
    icon: Users, 
    value: 500, 
    suffix: "+", 
    label: "Clientes Corporativos",
    description: "Empresas confiam na AnyConnect"
  },
  { 
    icon: Building2, 
    value: 18, 
    suffix: "", 
    label: "Províncias Cobertas",
    description: "Presença em todo o território"
  },
  { 
    icon: Globe, 
    value: 1500, 
    suffix: "+", 
    label: "Km de Fibra Óptica",
    description: "Infraestrutura própria"
  },
  { 
    icon: Award, 
    value: 10, 
    suffix: "+", 
    label: "Anos no Mercado",
    description: "Experiência comprovada"
  },
]

const achievements = [
  { icon: TrendingUp, label: "Crescimento anual de 40%" },
  { icon: Shield, label: "ISO 27001 Certificado" },
  { icon: Clock, label: "99.99% de disponibilidade" },
  { icon: Zap, label: "Resposta em < 15 min" },
]

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    
    let startTime: number
    let animationFrame: number
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])
  
  return count
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 bg-primary/5 border-y border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} delay={i * 100} />
          ))}
        </div>
        
        {/* Achievements */}
        <div className="flex flex-wrap justify-center gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
            >
              <achievement.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{achievement.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  stat: typeof stats[0]
  isVisible: boolean
  delay: number
}

function StatCard({ stat, isVisible, delay }: StatCardProps) {
  const [shouldStart, setShouldStart] = useState(false)
  const count = useCountUp(stat.value, 2000, shouldStart)
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldStart(true), delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        <stat.icon className="w-7 h-7 text-primary" />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-base font-medium text-foreground mb-1">{stat.label}</div>
      <div className="text-sm text-muted-foreground">{stat.description}</div>
    </div>
  )
}
