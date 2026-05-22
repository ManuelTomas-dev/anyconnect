import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'AnyConnect - Ligamos o Mundo ao Futuro',
  description: 'Operadora de telecomunicacoes certificada pelo INACOM. Solucoes de Internet, Datacenter, VOD, VPN MPLS e USSD para empresas em Angola.',
  keywords: ['telecomunicacoes', 'internet', 'datacenter', 'vpn', 'angola', 'fibra optica', 'cloud', 'hosting', 'vod', 'ussd'],
  authors: [{ name: 'AnyConnect' }],
  openGraph: {
    title: 'AnyConnect - Ligamos o Mundo ao Futuro',
    description: 'Operadora de telecomunicacoes certificada pelo INACOM. Solucoes completas de conectividade para empresas em Angola.',
    type: 'website',
    locale: 'pt_AO',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
