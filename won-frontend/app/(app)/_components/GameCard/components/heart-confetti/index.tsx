export function HeartConfetti() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {[...Array(6)].map((_, i) => (
        <span key={i} className={`confetti confetti-${i}`} />
      ))}
    </div>
  )
}
