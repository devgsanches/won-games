'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

type DropdownAlign = 'start' | 'center' | 'end'

interface DropdownProps {
  children: React.ReactNode
  trigger: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  align?: DropdownAlign
  sideOffset?: number
  alignOffset?: number
  className?: string
  showArrow?: boolean
}

export function Dropdown({
  trigger,
  children,
  open,
  onOpenChange,
  align = 'end',
  sideOffset = 12,
  alignOffset = 0,
  className,
  showArrow = true
}: DropdownProps) {
  const arrowPosition = {
    start: 'left-4',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-4'
  }

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            'group flex items-center gap-2 cursor-pointer outline-none',
            'hover:text-primary transition-colors duration-200',
            className
          )}
        >
          {trigger}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={cn(
          'bg-white rounded p-0 border-none text-black',
          'shadow-[0_4px_24px_rgba(0,0,0,0.15)] min-w-60 w-full',
          'max-h-none overflow-visible',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
          'data-[state=open]:slide-in-from-top-2 data-[state=closed]:slide-out-to-top-2',
          'data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100',
          'duration-200'
        )}
      >
        {children}
        {showArrow && (
          <div
            className={cn(
              'bg-white absolute -top-1.75 w-4 h-4 rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.05)]',
              arrowPosition[align]
            )}
          />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
