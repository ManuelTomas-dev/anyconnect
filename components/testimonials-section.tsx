"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "António Mendes",
    role: "CTO",
    company: "Banco Atlântico",
    content: "A AnyConnect revolucionou a nossa infraestrutura de rede. Com a VPN MPLS conseguimos conectar todas as nossas 50 agências com latência mínima e segurança máxima. O suporte 24/7 é excepcional.",
    rating: 5,
    sector: "Banca"
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Directora de TI",
    company: "Universidade Agostinho Neto",
    content: "A plataforma VOD da AnyConnect permitiu-nos criar um sistema de e-learning robusto para mais de 20.000 alunos. A qualidade de streaming e a proteção DRM superaram as nossas expectativas.",
    rating: 5,
    sector: "Educação"
  },
  {
    id: 3,
    name: "João Ferreira",
    role: "Director de Operações",
    company: "Sonangol",
    content: "Utilizamos os serviços de Datacenter e Internet Corporativa da AnyConnect há 5 anos. A disponibilidade de 99.99% é real e o SLA sempre foi cumprido. Parceiro de confiança.",
    rating: 5,
    sector: "Energia"
  },
  {
    id: 4,
    name: "Clara Domingos",
    role: "CEO",
    company: "Kixicredito",
    content: "A solução USSD da AnyConnect permite-nos alcançar milhões de angolanos sem smartphone. Processamos mais de 100.000 transações por dia com tempo de resposta inferior a 2 segundos.",
    rating: 5,
    sector: "Fintech"
  },
  {
    id: 5,
    name: "Pedro Lourenço",
    role: "CIO",
    company: "TAAG",
    content: "A migração para a fibra óptica da AnyConnect reduziu os nossos custos de conectividade em 40% e aumentou a velocidade em 10x. Excelente relação qualidade-preço.",
    rating: 5,
    sector: "Aviação"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Depoimentos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Dizem os{" "}
            <span className="text-gradient">Nossos Clientes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas líderes em Angola confiam na AnyConnect para as suas necessidades de telecomunicações
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-card border border-border">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>
            
            {/* Content */}
            <div className="pt-8">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8">
                &ldquo;{currentTestimonial.content}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                  {currentTestimonial.sector}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    i === currentIndex 
                      ? "w-8 bg-primary" 
                      : "bg-secondary hover:bg-primary/30"
                  )}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Client logos hint */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Empresas que confiam na AnyConnect</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["Sonangol", "TAAG", "BFA", "UNITEL", "BAI"].map((company) => (
              <span key={company} className="text-lg font-bold text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
