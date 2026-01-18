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
        className={`${sizeMap[size]} ${color === 'primary' ? 'bg-ribbon-primary text-white' : 'bg-ribbon-secondary text-white'} flex items-center justify-center absolute -right-4.5 top-4 shadow-xl/20
`}
      >
        {children}
      </div>

      <div
        className={`${color === 'primary' ? 'bg-ribbon-primary/50' : 'bg-ribbon-secondary/65'} absolute ${size === 'large' ? 'top-12' : 'top-11'}  w-4.5 h-2 -right-4.5`}
        style={{
          clipPath: 'polygon(0 0, 0% 100%, 100% 0)'
        }}
      ></div>
    </>
  )
}
