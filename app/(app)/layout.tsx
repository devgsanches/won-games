import type { Metadata } from 'next'
import '@/app/globals.css'
import { MobileNavbar } from '@/app/(app)/_components/mobile-navbar'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'Won Games is a platform for buying and selling games'
}

export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground overflow-x-hidden">
      <MobileNavbar />
      {children}
    </div>
  )
}
