interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={`pt-12 ${className ? className : ''}`}>
      {children}
    </section>
  )
}
