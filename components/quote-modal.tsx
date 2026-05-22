"use client"

import { useState } from "react"
import { X, Send, CheckCircle2, Wifi, Play, Server, Shield, MessageSquare, Building2, Users, FileText, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedService?: string
}

const services = [
  { id: "internet", name: "Internet Corporativa", icon: Wifi },
  { id: "vod", name: "Video on Demand", icon: Play },
  { id: "datacenter", name: "Datacenter", icon: Server },
  { id: "vpn", name: "VPN MPLS", icon: Shield },
  { id: "ussd", name: "USSD", icon: MessageSquare },
]

const companySize = [
  { id: "startup", name: "Startup (1-10)", icon: Users },
  { id: "small", name: "Pequena (11-50)", icon: Users },
  { id: "medium", name: "Media (51-200)", icon: Building2 },
  { id: "large", name: "Grande (200+)", icon: Building2 },
]

export function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    services: preselectedService ? [preselectedService] : [] as string[],
    companySize: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    requirements: ""
  })

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setStep(1)
    setIsSubmitted(false)
    setFormData({
      services: [],
      companySize: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      requirements: ""
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="p-8 pb-4 border-b border-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Calculator className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Orcamento</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Solicitar Orcamento</h2>
          <p className="text-muted-foreground mt-2">Preencha as informacoes para receber uma proposta personalizada</p>
          
          {/* Progress */}
          {!isSubmitted && (
            <div className="flex items-center gap-2 mt-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                    step >= s 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground"
                  )}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={cn(
                      "w-12 h-1 rounded-full transition-all",
                      step > s ? "bg-primary" : "bg-secondary"
                    )} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Pedido Recebido!</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Nossa equipa comercial entrara em contacto nas proximas 24 horas com uma proposta personalizada.
              </p>
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={resetForm} className="rounded-full">
                  Fechar
                </Button>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false)
                    setStep(1)
                    setFormData({...formData, services: []})
                  }}
                  className="rounded-full bg-primary text-primary-foreground"
                >
                  Novo Orcamento
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Services */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Selecione os servicos</h3>
                    <p className="text-sm text-muted-foreground mb-4">Escolha um ou mais servicos do seu interesse</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceToggle(service.id)}
                          className={cn(
                            "flex items-center gap-3 p-4 rounded-xl border transition-all text-left",
                            formData.services.includes(service.id)
                              ? "border-primary bg-primary/10"
                              : "border-border bg-secondary/30 hover:border-primary/30"
                          )}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
                            formData.services.includes(service.id)
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground"
                          )}>
                            <service.icon className="w-5 h-5" />
                          </div>
                          <span className="font-medium text-foreground">{service.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Tamanho da empresa</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {companySize.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setFormData({...formData, companySize: size.id})}
                          className={cn(
                            "flex items-center gap-3 p-4 rounded-xl border transition-all text-left",
                            formData.companySize === size.id
                              ? "border-primary bg-primary/10"
                              : "border-border bg-secondary/30 hover:border-primary/30"
                          )}
                        >
                          <span className="font-medium text-foreground text-sm">{size.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={formData.services.length === 0}
                    className="w-full rounded-full bg-primary text-primary-foreground h-12"
                  >
                    Continuar
                  </Button>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Informacoes de contacto</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nome completo *</label>
                      <Input 
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-secondary/50 border-border"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email corporativo *</label>
                      <Input 
                        type="email"
                        placeholder="seu@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-secondary/50 border-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Telefone *</label>
                      <Input 
                        placeholder="+244 900 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-secondary/50 border-border"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Empresa *</label>
                      <Input 
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-secondary/50 border-border"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1 rounded-full h-12"
                    >
                      Voltar
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.name || !formData.email || !formData.phone || !formData.company}
                      className="flex-1 rounded-full bg-primary text-primary-foreground h-12"
                    >
                      Continuar
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Project Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Detalhes do projeto</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Orcamento estimado</label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none"
                      >
                        <option value="">Selecione</option>
                        <option value="under50k">Ate 50.000 Kz/mes</option>
                        <option value="50k-100k">50.000 - 100.000 Kz/mes</option>
                        <option value="100k-500k">100.000 - 500.000 Kz/mes</option>
                        <option value="500k-1m">500.000 - 1.000.000 Kz/mes</option>
                        <option value="over1m">Mais de 1.000.000 Kz/mes</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Prazo desejado</label>
                      <select 
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none"
                      >
                        <option value="">Selecione</option>
                        <option value="urgent">Urgente (ate 1 semana)</option>
                        <option value="short">Curto (1-2 semanas)</option>
                        <option value="medium">Medio (2-4 semanas)</option>
                        <option value="flexible">Flexivel (1+ mes)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Requisitos especificos</label>
                    <Textarea 
                      placeholder="Descreva suas necessidades, quantidade de usuarios, localizacoes, requisitos tecnicos..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      className="bg-secondary/50 border-border min-h-[120px]"
                    />
                  </div>
                  
                  {/* Summary */}
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                    <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Resumo do pedido
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="text-foreground">Servicos:</span> {formData.services.map(s => services.find(srv => srv.id === s)?.name).join(", ")}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="text-foreground">Empresa:</span> {formData.company}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="text-foreground">Contacto:</span> {formData.name} ({formData.email})
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1 rounded-full h-12"
                    >
                      Voltar
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 rounded-full bg-primary text-primary-foreground h-12"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Pedido
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
