"use client"

import { Play, Shield, Monitor, CreditCard, GraduationCap, Building, Film, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "Box personalizado com sua identidade visual",
  "Transcodificacao automatica para multiplos dispositivos",
  "Protecao DRM e token de acesso",
  "Hospedagem segura no DataCenter AnyConnect",
  "Estatisticas em tempo real",
  "Modelos de monetizacao flexiveis"
]

const segments = [
  { icon: GraduationCap, name: "Educacao", desc: "Cursos EAD e LMS" },
  { icon: Building, name: "Empresas", desc: "Treinamentos internos" },
  { icon: Film, name: "Media", desc: "Canais OTT" },
  { icon: Landmark, name: "Governo", desc: "Conteudo institucional" },
]

export function VODSection() {
  return (
    <section id="vod" className="py-20 border-b border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 flex-grow bg-white/20 rounded-full">
                    <div className="h-full w-1/3 bg-purple-500 rounded-full" />
                  </div>
                  <span className="text-xs text-white/70">4K</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3 mt-4">
              {segments.map((seg) => (
                <div 
                  key={seg.name}
                  className="p-3 rounded-lg bg-card border border-border text-center"
                >
                  <seg.icon className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                  <p className="text-xs font-medium text-foreground">{seg.name}</p>
                  <p className="text-xs text-muted-foreground">{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
              <Play className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-medium text-purple-500 uppercase tracking-wider">Video on Demand</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Streaming Profissional
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Plataforma robusta de VOD para empresas, instituicoes de ensino e produtores de conteudo 
              com qualidade ate 4K e protecao contra pirataria.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-purple-500 text-white hover:bg-purple-600 rounded-full">
              Conhecer Plataforma
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
