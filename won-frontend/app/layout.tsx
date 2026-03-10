import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ApolloProviderWrapper } from "@/lib/apollo-client"

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Won Games',
  description:
    'Won Games® is an online gaming platform, with a wide variety of games for all tastes.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" href="/logo-mobile.svg" />
      </head>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <main className="flex-1">
          <ApolloProviderWrapper>
            {children}
          </ApolloProviderWrapper>
        </main>
      </body>
    </html>
  )
}
