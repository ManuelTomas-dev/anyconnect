"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  servicos: [
    { name: "Internet Corporativa", href: "#internet" },
    { name: "Video on Demand", href: "#vod" },
    { name: "Datacenter", href: "#datacenter" },
    { name: "VPN MPLS", href: "#vpn" },
    { name: "USSD", href: "#ussd" },
  ],
  empresa: [
    { name: "Sobre Nos", href: "#about" },
    { name: "Noticias", href: "#news" },
    { name: "Carreiras", href: "#" },
    { name: "Parceiros", href: "#" },
  ],
  suporte: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Documentacao", href: "#" },
    { name: "Status do Servico", href: "#" },
    { name: "Contacto", href: "#contact" },
  ],
  legal: [
    { name: "Termos de Servico", href: "#" },
    { name: "Politica de Privacidade", href: "#" },
    { name: "SLA", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-xl font-bold text-primary">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Any<span className="text-primary">Connect</span>
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              Operadora de telecomunicacoes certificada pelo INACOM. 
              Conectando Angola ao mundo digital.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Todos os servicos operacionais</span>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicos</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AnyConnect. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">Certificado INACOM</span>
            <a 
              href="https://www.anyconnect.ao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              www.anyconnect.ao
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
