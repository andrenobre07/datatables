import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // <-- ESTA LINHA É A MAIS IMPORTANTE

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tabela de Dados Avançada',
  description: 'Criado com Next.js e shadcn/ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen bg-background text-foreground">
          {children}
        </main>
      </body>
    </html>
  )
}