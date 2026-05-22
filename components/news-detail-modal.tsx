"use client"

import { X, Calendar, Clock, Share2, Facebook, Linkedin, Twitter, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  featured?: boolean
  image?: string
  author?: string
}

interface NewsDetailModalProps {
  isOpen: boolean
  onClose: () => void
  news: NewsItem | null
  allNews: NewsItem[]
  onNavigate: (news: NewsItem) => void
}

export function NewsDetailModal({ isOpen, onClose, news, allNews, onNavigate }: NewsDetailModalProps) {
  if (!isOpen || !news) return null

  const currentIndex = allNews.findIndex(n => n.id === news.id)
  const prevNews = currentIndex > 0 ? allNews[currentIndex - 1] : null
  const nextNews = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Header Image Placeholder */}
        <div className="h-48 sm:h-64 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-medium">
              {news.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {news.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {news.readTime} de leitura
            </span>
            {news.author && (
              <span>Por {news.author}</span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-tight">
            {news.title}
          </h1>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {news.excerpt}
            </p>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              {news.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center justify-between py-6 border-t border-border">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Partilhar
            </span>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-border">
            {prevNews ? (
              <button 
                onClick={() => onNavigate(prevNews)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Artigo Anterior</span>
              </button>
            ) : <div />}
            
            <Button variant="outline" onClick={onClose} className="rounded-full">
              Ver Todas as Notícias
            </Button>
            
            {nextNews ? (
              <button 
                onClick={() => onNavigate(nextNews)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="hidden sm:inline">Próximo Artigo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  )
}
