import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Won Games',
  description:
    'Won Games® é uma plataforma de jogos online, com uma ampla variedade de jogos para todos os gostos.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <main className="flex-1">{children} </main>

      </body>
    </html>
  )
}
