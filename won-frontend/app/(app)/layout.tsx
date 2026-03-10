export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-family-poppins min-h-screen flex flex-col">
      {children}
    </div>
  )
}
