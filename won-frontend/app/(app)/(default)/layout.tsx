import { Footer } from '../_components/Footer'
import { Navbar } from '../_components/Navbar'

export default function DefaultLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-main-bg">
      <div className="font-family-poppins w-full">
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
