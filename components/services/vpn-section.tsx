"use client"

import { Shield, Network, Lock, Gauge, RefreshCw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const vpnTypes = [
  {
    type: "MPLS L2",
    name: "Camada 2",
    description: "Flexibilidade para integracao com sua rede existente",
    features: [
      "Tuneis de nivel Ethernet",
      "Mantenha seu protocolo de roteamento",
      "Integracao com VLANs",
      "Controle total do cliente"
    ]
  },
  {
    type: "MPLS L3",
    name: "Camada 3",
    description: "Gestao facilitada com roteamento inteligente",
    features: [
      "Roteamento gerido pela AnyConnect",
      "Rede logica isolada",
      "Integracao simplificada",
      "Alta escalabilidade"
    ]
  },
]

const benefits = [
  { icon: Lock, label: "Isolamento Total" },
  { icon: RefreshCw, label: "Alta Disponibilidade" },
  { icon: Gauge, label: "QoS Garantido" },
  { icon: Network, label: "Multiponto" },
]

export function VPNSection() {
  return (
    <section id="vpn" className="py-20 border-b border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">VPN MPLS</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Rede Privada Corporativa
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Conexoes privadas, seguras e escalaveis entre filiais, data centers e escritorios remotos 
              com qualidade de servico e baixa latencia.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <benefit.icon className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-orange-500 text-white hover:bg-orange-600 rounded-full">
              Falar com Especialista
            </Button>
          </div>
          
          <div className="space-y-4">
            {vpnTypes.map((vpn) => (
              <div 
                key={vpn.type}
                className="p-6 rounded-2xl bg-card border border-border hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-500">{vpn.type.split(' ')[1]}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-semibold text-foreground">{vpn.type}</h4>
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-xs text-orange-500">{vpn.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{vpn.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {vpn.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-orange-500" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
