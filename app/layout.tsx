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
  title: 'Manuel Tomás — Web Developer fullstack',
  description:
    'Portfólio profissional de Manuel Tomás, desenvolvedor Web especializado em JavaScript, TypeScript, React, Next.js, Node.js e desenvolvimento mobile com React Native.',

  keywords: [
    'Manuel Tomás',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'React Native',
    'Mobile Developer',
    'Programador Angola',
    'Desenvolvedor Fullstack',
    'Portfolio',
    'Prisma',
    'MySQL',
    'Expo Router',
  ],

  authors: [{ name: 'Manuel Tomás' }],

  creator: 'Manuel Tomás',

  openGraph: {
    title: 'Manuel Tomás — Web Developer & JavaScript Developer',

    description:
      'Conheça o portfólio de Manuel Tomás, desenvolvedor especializado em aplicações web modernas, APIs, sistemas escaláveis e aplicações mobile.',

    type: 'website',
    locale: 'pt_AO',

    siteName: 'Manuel Tomás Portfolio',
  },

  robots: {
    index: true,
    follow: true,
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
