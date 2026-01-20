import { Footer } from './_components/Footer'
import { Navbar } from './_components/Navbar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-family-poppins">
      <div className="py-8 px-6 md:p-10 md:px-20">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  )
}

// Test from won-frontend
// test
