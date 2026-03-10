interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-grid-container mx-auto space-y-6 ${className}`}>
      {children}
    </div>
  )
}
