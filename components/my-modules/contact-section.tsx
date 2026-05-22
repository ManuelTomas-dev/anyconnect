"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { QuoteModal } from "../quote-modal"

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    details: ["+244 957 844 787", "Disponível para contacto"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["manueldiogotomas@gmail.com", "Resposta em 24-48h"]
  },
  {
    icon: MapPin,
    title: "Localização",
    details: ["Luanda, Angola", "Timezone: UTC+1"]
  },
  {
    icon: Clock,
    title: "Disponibilidade",
    details: ["Segunda a Sexta: 09:00-18:00", "Projetos freelance aberto"]
  }
]

const quickActions = [
  {
    icon: Building2,
    title: "Solicitar Orcamento",
    description: "Para seu projeto de desenvolvimento",
    action: "quote"
  },
  {
    icon: Calendar,
    title: "Agendar Reuniao",
    description: "Fale comigo sobre seu projeto",
    action: "meeting"
  },
  {
    icon: MessageCircle,
    title: "Contacto Direto",
    description: "via WhatsApp",
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
              Vamos Trabalhar{" "}
              <span className="text-gradient">Juntos</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contacto para discutir seu projeto ou para mais informações 
              sobre meus serviços de desenvolvimento fullstack e DevOps.
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
                <p className="text-sm text-muted-foreground mb-4">Conecte comigo</p>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/MDT-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">GitHub</span>
                    <span className="text-xs text-muted-foreground">MDT-dev</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/manuel-diogo-tomas-5001a32a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">LinkedIn</span>
                    <span className="text-xs text-muted-foreground">Manuel Diogo Tomás</span>
                  </a>
                  <a 
                    href="https://wa.me/244957844787"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">WhatsApp</span>
                    <span className="text-xs text-muted-foreground">+244 957 844 787</span>
                  </a>
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
                            <option value="web">Desenvolvimento Web</option>
                            <option value="mobile">Desenvolvimento Mobile</option>
                            <option value="backend">Backend / APIs</option>
                            <option value="devops">DevOps / Infraestrutura</option>
                            <option value="maintenance">Manutenção / Suporte</option>
                            <option value="consulting">Consultoria</option>
                          </>
                        ) : (
                          <>
                            <option value="web">Projeto Web</option>
                            <option value="mobile">Aplicação Mobile</option>
                            <option value="backend">Backend / API</option>
                            <option value="devops">Infraestrutura Cloud</option>
                            <option value="maintenance">Manutenção de Projeto</option>
                            <option value="consulting">Consultoria Técnica</option>
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
