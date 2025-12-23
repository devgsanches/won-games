import type { Metadata } from 'next'
import '@/app/globals.css'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'Won Games is a platform for buying and selling games'
}

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-sidebar-foreground text-sidebar-primary-foreground flex  justify-center pt-32">
      <div className="flex items-center flex-col w-full">
        <Image
          src="/logo-with-text.png"
          alt="Won Games"
          width={200}
          height={60}
        />
        {children}
      </div>
    </div>
  )
}
