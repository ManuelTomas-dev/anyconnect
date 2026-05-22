"use client"

import { MessageSquare, Smartphone, Zap, Building, Landmark, Heart, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const useCases = [
  "Consultas de saldo e extratos",
  "Recargas de credito e dados",
  "Campanhas promocionais",
  "Pesquisas e enquetes",
  "Suporte ao cliente",
  "Servicos publicos"
]

const segments = [
  { icon: Building, name: "Operadoras" },
  { icon: Landmark, name: "Bancos" },
  { icon: BarChart3, name: "Fintechs" },
  { icon: Heart, name: "ONGs" },
]

export function USSDSection() {
  return (
    <section id="ussd" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Phone Mockup */}
            <div className="relative max-w-xs mx-auto">
              <div className="aspect-[9/16] rounded-3xl bg-card border-4 border-border overflow-hidden">
                <div className="h-full p-4 flex flex-col">
                  <div className="text-center py-4 border-b border-border">
                    <span className="text-sm text-muted-foreground">*123#</span>
                  </div>
                  
                  <div className="flex-grow py-6 space-y-4">
                    <div className="p-3 rounded-lg bg-secondary">
                      <p className="text-sm text-foreground mb-3">Bem-vindo ao AnyConnect</p>
                      <p className="text-xs text-muted-foreground">Selecione uma opcao:</p>
                    </div>
                    
                    {["1. Consultar Saldo", "2. Recarregar", "3. Promocoes", "4. Suporte"].map((option, i) => (
                      <div 
                        key={option}
                        className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-sm text-foreground"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 py-3 border-t border-border">
                    <div className="flex-grow h-10 rounded-full bg-secondary flex items-center px-4">
                      <span className="text-sm text-muted-foreground">Digite opcao...</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
              <MessageSquare className="w-4 h-4 text-teal-500" />
              <span className="text-xs font-medium text-teal-500 uppercase tracking-wider">USSD</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comunicacao Sem Internet
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tecnologia leve e acessivel para comunicacoes interativas via celular, 
              ideal para regioes com baixa conectividade. Funciona em qualquer celular GSM.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {useCases.map((useCase) => (
                <div key={useCase} className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-teal-500" />
                  <span className="text-sm text-muted-foreground">{useCase}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {segments.map((seg) => (
                <div 
                  key={seg.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border"
                >
                  <seg.icon className="w-4 h-4 text-teal-500" />
                  <span className="text-sm text-foreground">{seg.name}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-teal-500 text-white hover:bg-teal-600 rounded-full">
              Solicitar Integracao
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
