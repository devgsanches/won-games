import type { Metadata } from 'next'
import { Inter, Fira_Sans, Playwrite_RO } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-fira-sans'
})

const playwriteRomania = Playwrite_RO({
  weight: ['400'],
  variable: '--font-playwrite-ro'
})

export const metadata: Metadata = {
  title: 'Jet Society',
  description:
    'Jet Society® é um clube seleto de proprietários de jatos, combinando gestão completa, eficiência operacional e benefícios sob medida.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${firaSans.variable} ${playwriteRomania.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col overflow-x-hidden">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
