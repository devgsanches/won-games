import type { Metadata } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Footer } from './(app)/_components/footer'

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'Won Games is a platform for buying and selling games'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} antialiased min-h-screen font-sans flex flex-col overflow-x-hidden`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
