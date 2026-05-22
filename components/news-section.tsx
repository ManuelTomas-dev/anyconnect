"use client"

import { useState } from "react"
import { Calendar, ArrowRight, Clock, Tag, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { NewsDetailModal } from "./news-detail-modal"

const newsData = [
  {
    id: 1,
    title: "AnyConnect Expande Rede de Fibra Óptica em Luanda",
    excerpt: "Nova infraestrutura de fibra óptica alcança mais de 50 novos bairros na capital, oferecendo velocidades de até 1 Gbps para empresas e residências.",
    content: `A AnyConnect anunciou hoje a conclusão da primeira fase de expansão da sua rede de fibra óptica em Luanda, um investimento de mais de 500 milhões de Kwanzas que vai beneficiar milhares de empresas e residências na capital angolana.

A nova infraestrutura cobre mais de 50 bairros anteriormente sem acesso a internet de alta velocidade, incluindo zonas industriais e comerciais de grande importância económica. Com esta expansão, a AnyConnect passa a oferecer velocidades simétricas de até 1 Gbps, posicionando-se como uma das operadoras com maior cobertura de fibra em Angola.

"Este investimento representa o nosso compromisso com a transformação digital de Angola", afirmou o CEO da AnyConnect. "Acreditamos que o acesso à internet de qualidade é fundamental para o desenvolvimento económico e social do país."

A segunda fase do projeto, prevista para o segundo semestre de 2026, vai estender a cobertura para mais 30 bairros e incluir a modernização dos pontos de presença existentes.`,
    date: "28 Mar 2026",
    readTime: "4 min",
    category: "Infraestrutura",
    featured: true,
    author: "Equipa de Comunicação"
  },
  {
    id: 2,
    title: "Lançamento da Plataforma VOD para Educação",
    excerpt: "Nova solução de streaming dedicada a instituições de ensino permite aulas online com qualidade profissional e proteção DRM.",
    content: `A AnyConnect lançou oficialmente a sua plataforma de Video on Demand (VOD) especialmente desenhada para o sector educativo angolano. A solução permite que universidades, escolas e centros de formação disponibilizem conteúdo em vídeo de alta qualidade aos seus alunos.

A plataforma inclui funcionalidades como streaming adaptativo, proteção DRM contra pirataria, painel de analytics para acompanhamento do engajamento dos alunos, e integração com os principais sistemas de gestão académica do mercado.

"Com o crescimento do ensino híbrido e à distância, identificámos uma necessidade urgente de ferramentas profissionais para as instituições angolanas", explicou o Director de Produto da AnyConnect.

Várias universidades já manifestaram interesse na solução, com pilotos previstos para iniciar nas próximas semanas.`,
    date: "22 Mar 2026",
    readTime: "3 min",
    category: "Produto",
    author: "Departamento de Produto"
  },
  {
    id: 3,
    title: "Parceria Estratégica com Operadoras Internacionais",
    excerpt: "Acordo permite expandir conectividade internacional e melhorar latência para serviços cloud hospedados na Europa e América.",
    content: `A AnyConnect formalizou parcerias estratégicas com três das maiores operadoras de telecomunicações internacionais, reforçando significativamente a sua capacidade de conectividade global.

Os acordos incluem acesso a rotas submarinas redundantes, pontos de presença em data centers tier IV na Europa e América do Norte, e acordos de peering com os principais provedores de conteúdo como Google, Microsoft e Amazon.

Com estas parcerias, os clientes corporativos da AnyConnect beneficiarão de latências até 40% menores para acesso a serviços cloud internacionais, maior resiliência nas ligações e preços mais competitivos para tráfego internacional.

"Estas parcerias posicionam-nos como a escolha preferencial para empresas que precisam de conectividade global de classe mundial a partir de Angola", destacou o CTO da empresa.`,
    date: "15 Mar 2026",
    readTime: "4 min",
    category: "Parcerias",
    author: "Departamento Comercial"
  },
  {
    id: 4,
    title: "Datacenter Recebe Certificação Internacional de Segurança",
    excerpt: "Infraestrutura da AnyConnect agora conta com certificação ISO 27001 e SOC 2, reforçando compromisso com segurança da informação.",
    content: `O Datacenter da AnyConnect obteve as certificações ISO 27001 e SOC 2 Type II, tornando-se um dos poucos centros de dados em Angola com estas credenciais internacionais de segurança da informação.

A certificação ISO 27001 atesta que a empresa mantém um sistema de gestão de segurança da informação (SGSI) robusto, enquanto o SOC 2 Type II valida os controles de segurança, disponibilidade, integridade de processamento, confidencialidade e privacidade.

"Estas certificações são especialmente importantes para clientes do sector financeiro, saúde e governo, que têm requisitos regulatórios rigorosos", explicou o Director de Segurança da AnyConnect.

O processo de certificação durou cerca de 18 meses e envolveu auditorias extensivas por entidades certificadoras internacionais.`,
    date: "10 Mar 2026",
    readTime: "3 min",
    category: "Segurança",
    author: "Equipa de Segurança"
  },
  {
    id: 5,
    title: "Nova Solução USSD para Serviços Financeiros",
    excerpt: "Bancos e fintechs podem agora integrar serviços via código USSD com total segurança e conformidade regulatória.",
    content: `A AnyConnect apresentou uma nova versão da sua plataforma USSD, especialmente optimizada para o sector de serviços financeiros. A solução permite que bancos, seguradoras e fintechs ofereçam serviços via código USSD com o mais alto nível de segurança.

Entre as novidades estão encriptação end-to-end, autenticação biométrica via voz, integração com sistemas anti-fraude, e conformidade total com as regulamentações do BNA (Banco Nacional de Angola).

"O USSD continua a ser a forma mais democrática de acesso a serviços digitais em Angola, funcionando em qualquer telemóvel GSM sem necessidade de internet", afirmou o Director de Inovação.

Dois grandes bancos angolanos já estão em fase avançada de implementação, com lançamento previsto para o segundo trimestre de 2026.`,
    date: "05 Mar 2026",
    readTime: "3 min",
    category: "Inovação",
    author: "Equipa de Inovação"
  },
  {
    id: 6,
    title: "AnyConnect Anuncia Programa de Capacitação Técnica",
    excerpt: "Iniciativa vai formar mais de 200 técnicos angolanos em tecnologias de telecomunicações e cloud computing.",
    content: `A AnyConnect lançou um ambicioso programa de capacitação técnica que visa formar mais de 200 profissionais angolanos nas áreas de telecomunicações, redes e cloud computing ao longo dos próximos dois anos.

O programa inclui formações certificadas em tecnologias Cisco, Microsoft Azure, AWS e Google Cloud, além de especializações em áreas como cibersegurança, DevOps e análise de dados.

"Investir no capital humano angolano é fundamental para o futuro do sector tecnológico no país", afirmou a Directora de Recursos Humanos. "Queremos que os jovens angolanos tenham as competências necessárias para liderar a transformação digital."

As inscrições para a primeira turma abrem em Abril, com vagas prioritárias para recém-formados de instituições angolanas de ensino superior.`,
    date: "01 Mar 2026",
    readTime: "3 min",
    category: "RSE",
    author: "Recursos Humanos"
  }
]

const categories = ["Todos", "Infraestrutura", "Produto", "Parcerias", "Segurança", "Inovação", "RSE"]

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [showAll, setShowAll] = useState(false)
  const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null)
  
  const filteredNews = activeCategory === "Todos" 
    ? newsData 
    : newsData.filter(n => n.category === activeCategory)
  
  const displayedNews = showAll ? filteredNews : filteredNews.slice(0, 4)
  const featuredNews = filteredNews.find(n => n.featured)
  const regularNews = displayedNews.filter(n => !n.featured || activeCategory !== "Todos")

  return (
    <>
      <section id="news" className="relative py-24 sm:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <TrendingUp className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Notícias</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Últimas{" "}
                <span className="text-gradient">Novidades</span>
              </h2>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setShowAll(false)
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured News - Only show on "Todos" */}
            {featuredNews && activeCategory === "Todos" && (
              <div 
                className="lg:col-span-7 group cursor-pointer"
                onClick={() => setSelectedNews(featuredNews)}
              >
                <div className="h-full rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Image placeholder */}
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 relative">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        Destaque
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                        {featuredNews.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {featuredNews.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                      {featuredNews.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {featuredNews.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredNews.readTime} de leitura
                      </span>
                      
                      <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Ler Artigo
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Regular News */}
            <div className={cn(
              "space-y-4",
              activeCategory === "Todos" && featuredNews ? "lg:col-span-5" : "lg:col-span-12"
            )}>
              {(activeCategory === "Todos" && featuredNews ? regularNews : displayedNews).map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedNews(item)}
                  className="group cursor-pointer p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {item.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Load More / Show Less */}
              {filteredNews.length > 4 && (
                <Button 
                  variant="outline" 
                  onClick={() => setShowAll(!showAll)}
                  className="w-full rounded-full group mt-4"
                >
                  {showAll ? "Mostrar Menos" : `Ver Mais ${filteredNews.length - 4} Notícias`}
                  <ArrowRight className={cn(
                    "w-4 h-4 ml-2 transition-transform",
                    showAll ? "rotate-[-90deg]" : "rotate-90"
                  )} />
                </Button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "150+", label: "Artigos Publicados" },
              { value: "50K+", label: "Leitores Mensais" },
              { value: "12", label: "Países Alcançados" },
              { value: "24/7", label: "Actualizações" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      <NewsDetailModal
        isOpen={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        news={selectedNews}
        allNews={newsData}
        onNavigate={(news) => setSelectedNews(news)}
      />
    </>
  )
}
