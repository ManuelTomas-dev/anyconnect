"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WHATSAPP_NUMBER = "244923000000" // Replace with actual number

const quickMessages = [
  "Quero saber mais sobre Internet Corporativa",
  "Preciso de informacoes sobre Datacenter",
  "Interesse em VPN MPLS",
  "Consulta sobre Video on Demand",
  "Falar com um consultor"
]

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsApp = (message?: string) => {
    const encodedMessage = encodeURIComponent(message || "Ola! Gostaria de saber mais sobre os servicos da AnyConnect.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")
  }

  return (
    <>
      {/* Chat Widget */}
      <div 
        className={cn(
          "fixed bottom-24 right-6 z-50 w-80 transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        <div className="rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#25D366] p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xl font-bold text-white">A</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-semibold text-white">AnyConnect</h4>
              <p className="text-sm text-white/80">Resposta rapida via WhatsApp</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Ola! Como podemos ajudar? Clique numa opcao ou escreva sua mensagem.
            </p>
            
            <div className="space-y-2 mb-4">
              {quickMessages.map((message) => (
                <button
                  key={message}
                  onClick={() => openWhatsApp(message)}
                  className="w-full text-left px-4 py-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-sm text-foreground transition-colors border border-border hover:border-primary/30"
                >
                  {message}
                </button>
              ))}
            </div>
            
            <Button 
              onClick={() => openWhatsApp()}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl h-12"
            >
              <Send className="w-4 h-4 mr-2" />
              Iniciar Conversa
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen 
            ? "bg-card border border-border text-foreground" 
            : "bg-[#25D366] text-white"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7" />
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </>
        )}
      </button>
    </>
  )
}
