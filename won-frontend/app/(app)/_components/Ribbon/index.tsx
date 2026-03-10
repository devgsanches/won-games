const sizeMap = {
  small: 'text-xs font-bold px-3.5 py-1.5',
  large: 'h-8 text-sm font-semibold px-5'
}

interface RibbonProps {
  color?: 'primary' | 'secondary'
  size?: 'small' | 'large'
  children: React.ReactNode
}

export function Ribbon({
  children,
  color = 'primary',
  size = 'large'
}: RibbonProps) {
  return (
    <>
      <div
        className={`hidden md:flex ${sizeMap[size]} ${color === 'primary' ? 'bg-ribbon-primary text-white' : 'bg-ribbon-secondary text-white'} items-center justify-center absolute -right-4.5 top-6 shadow-xl/20
`}
      >
        {children}
      </div>

      <div
        className={`hidden md:flex ${color === 'primary' ? 'bg-ribbon-primary/50' : 'bg-ribbon-secondary/65'} absolute ${size === 'large' ? 'top-14' : 'top-11'}  w-4.5 h-2 -right-4.5`}
        style={{
          clipPath: 'polygon(0 0, 0% 100%, 100% 0)'
        }}
      ></div>
    </>
  )
}
