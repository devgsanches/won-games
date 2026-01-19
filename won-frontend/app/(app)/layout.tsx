import { Footer } from "./_components/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-family-poppins">
      {children}
      <Footer />
    </div>
  )

}
