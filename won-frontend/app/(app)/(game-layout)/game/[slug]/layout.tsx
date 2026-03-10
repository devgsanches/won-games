import { Footer } from '../../../_components/Footer'
import { Navbar } from '../../../_components/Navbar'

export default function GameLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="font-family-poppins w-full z-10 absolute">
        <Navbar variant="transparent" />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
