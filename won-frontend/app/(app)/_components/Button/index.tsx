import { Button as ButtonShadcn } from '@/components/ui/button'
import Link from 'next/link'
import { cloneElement } from 'react'
import { HeartConfetti } from '../GameCard/components/heart-confetti'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
  variant?: 'default' | 'link' | 'wishList'
  icon?: React.ReactElement<{ className?: string }>
  to?: string
  onClick?: () => void
  isFavorited?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const iconSizeMap = {
  sm: 'size-3.5',
  md: 'size-4.5',
  lg: 'size-5.25'
}

const textSizeMap = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base'
}

export function Button({
  size = 'md',
  fullWidth = false,
  children,
  variant = 'default',
  icon,
  onClick,
  to,
  className,
  type = 'button',
  isFavorited = false
}: ButtonProps) {
  const iconSize = iconSizeMap[size]

  const textSize = textSizeMap[size]

  return (
    <ButtonShadcn
      type={type}
      variant={variant}
      size={size}
      className={` ${className} ${
        icon
          ? `flex items-center
        `
          : ''
      } ${fullWidth ? 'w-full' : ''} ${variant === 'wishList' ? 'gap-3' : 'gap-1.5'} `}
      onClick={onClick}
    >
      {icon && (
        <span className="flex items-center relative">
          {variant === 'wishList' && isFavorited && <HeartConfetti />}
          {cloneElement(icon, {
            className: `${iconSize} ${variant === 'wishList' ? `text-primary transition-all duration-300 ease-out ${isFavorited ? 'fill-primary scale-115' : 'fill-transparent scale-100'}` : ''}`
          })}
        </span>
      )}

      {to ? (
        <Link href={to}> {children} </Link>
      ) : (
        <span className={textSize}>{children}</span>
      )}
    </ButtonShadcn>
  )
}
