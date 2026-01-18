import { Button as ButtonShadcn } from '@/components/ui/button'
import Link from 'next/link'
import { cloneElement } from 'react'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
  variant?: 'default' | 'link'
  icon?: React.ReactElement<{ className?: string }>
  to?: string
  onClick?: () => void
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
  to
}: ButtonProps) {
  const iconSize = iconSizeMap[size]

  const textSize = textSizeMap[size]

  return (
    <ButtonShadcn
      type={onClick ? 'button' : undefined}
      variant={variant}
      size={size}
      className={`${
        icon
          ? `flex items-center gap-1.5
        `
          : ''
      } ${fullWidth ? 'w-full' : ''}`}
    >
      {icon && (
        <span className="flex items-center">
          {cloneElement(icon, {
            className: iconSize
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
