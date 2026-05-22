"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { QuoteModal } from "./quote-modal"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereco",
    details: ["Luanda, Angola", "Rua Rainha Ginga, N.123, Edificio AnyConnect"]
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["+244 923 000 000", "+244 222 000 000"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@anyconnect.ao", "suporte@anyconnect.ao"]
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Segunda a Sexta: 8h - 18h", "Suporte Tecnico: 24/7"]
  }
]

const quickActions = [
  {
    icon: Building2,
    title: "Orcamento Empresarial",
    description: "Receba uma proposta personalizada",
    action: "quote"
  },
  {
    icon: Calendar,
    title: "Agendar Reuniao",
    description: "Fale com um consultor",
    action: "meeting"
  },
  {
    icon: MessageCircle,
    title: "Suporte Tecnico",
    description: "Assistencia 24/7",
    action: "support"
  }
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [formType, setFormType] = useState<"contact" | "meeting" | "support">("contact")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleQuickAction = (action: string) => {
    if (action === "quote") {
      setShowQuoteModal(true)
    } else if (action === "meeting") {
      setFormType("meeting")
    } else if (action === "support") {
      setFormType("support")
    }
  }

  return (
    <>
      <section id="contact" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Contacto</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos Conectar{" "}
              <span className="text-gradient">Seu Negocio</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contacto com nossa equipa para uma consultoria gratuita 
              e descubra a solucao ideal para sua empresa.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {quickActions.map((action) => (
              <button
                key={action.title}
                onClick={() => handleQuickAction(action.action)}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <action.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Comecar
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 rounded-3xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Informacoes de Contacto</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="h-48 rounded-2xl bg-card border border-border overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Luanda, Angola</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground mb-4">Siga-nos nas redes sociais</p>
                <div className="flex items-center gap-3">
                  {[
                    { name: "Facebook", initial: "F" },
                    { name: "LinkedIn", initial: "in" },
                    { name: "Instagram", initial: "I" },
                    { name: "Twitter", initial: "X" }
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href="#"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <span className="text-xs font-medium text-muted-foreground">{social.initial}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-3xl bg-card border border-border">
                {/* Form Type Tabs */}
                <div className="flex gap-2 mb-6">
                  {[
                    { id: "contact", label: "Mensagem" },
                    { id: "meeting", label: "Agendar Reuniao" },
                    { id: "support", label: "Suporte" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setFormType(tab.id as typeof formType)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all",
                        formType === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-6">
                  {formType === "contact" && "Envie uma Mensagem"}
                  {formType === "meeting" && "Agendar Reuniao com Consultor"}
                  {formType === "support" && "Suporte Tecnico"}
                </h3>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {formType === "contact" && "Mensagem Enviada!"}
                      {formType === "meeting" && "Pedido de Reuniao Recebido!"}
                      {formType === "support" && "Ticket de Suporte Criado!"}
                    </h4>
                    <p className="text-muted-foreground">Entraremos em contacto em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Nome *</label>
                        <Input 
                          placeholder="Seu nome completo"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="bg-secondary/50 border-border focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                        <Input 
                          type="email"
                          placeholder="seu@email.com"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="bg-secondary/50 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Telefone</label>
                        <Input 
                          placeholder="+244 900 000 000"
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Empresa</label>
                        <Input 
                          placeholder="Nome da empresa"
                          value={formState.company}
                          onChange={(e) => setFormState({...formState, company: e.target.value})}
                          className="bg-secondary/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    {formType === "meeting" && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Data Preferida</label>
                          <Input 
                            type="date"
                            className="bg-secondary/50 border-border focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Horario Preferido</label>
                          <select className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none">
                            <option value="">Selecione</option>
                            <option value="morning">Manha (9h-12h)</option>
                            <option value="afternoon">Tarde (14h-17h)</option>
                          </select>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {formType === "support" ? "Tipo de Problema" : "Servico de Interesse"}
                      </label>
                      <select 
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                        className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none"
                      >
                        <option value="">Selecione</option>
                        {formType === "support" ? (
                          <>
                            <option value="connectivity">Problema de Conectividade</option>
                            <option value="slowness">Lentidao na Conexao</option>
                            <option value="outage">Servico Indisponivel</option>
                            <option value="billing">Faturacao</option>
                            <option value="other">Outro</option>
                          </>
                        ) : (
                          <>
                            <option value="internet">Internet Corporativa</option>
                            <option value="vod">Video on Demand</option>
                            <option value="datacenter">Datacenter</option>
                            <option value="vpn">VPN MPLS</option>
                            <option value="ussd">USSD</option>
                            <option value="multiple">Multiplos Servicos</option>
                          </>
                        )}
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {formType === "support" ? "Descricao do Problema" : "Mensagem"}
                      </label>
                      <Textarea 
                        placeholder={
                          formType === "support" 
                            ? "Descreva o problema em detalhes..."
                            : "Descreva sua necessidade..."
                        }
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="bg-secondary/50 border-border focus:border-primary min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="flex gap-4 pt-2">
                      <Button 
                        type="submit"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-base font-medium"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {formType === "contact" && "Enviar Mensagem"}
                        {formType === "meeting" && "Solicitar Reuniao"}
                        {formType === "support" && "Abrir Ticket"}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
      />
    </>
  )
}
