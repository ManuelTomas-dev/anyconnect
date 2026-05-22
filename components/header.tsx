"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const services = [
  { name: "Internet", href: "#internet" },
  { name: "VOD", href: "#vod" },
  { name: "Datacenter", href: "#datacenter" },
  { name: "VPN MPLS", href: "#vpn" },
  { name: "USSD", href: "#ussd" },
]

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Servicos", href: "#services", hasDropdown: true },
  { name: "Parceiros", href: "#parceiros" },
  { name: "Noticias", href: "#news" },
  { name: "Contacto", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="text-xl font-bold text-primary">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Any<span className="text-primary">Connect</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link href={service.href} className="w-full cursor-pointer">
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                Fale Connosco
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="flex flex-col gap-1">
                    <span className="px-4 py-2 text-sm font-medium text-foreground">
                      {link.name}
                    </span>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-8 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="px-4 pt-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Fale Connosco
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
