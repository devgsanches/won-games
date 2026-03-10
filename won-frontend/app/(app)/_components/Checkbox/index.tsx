'use client'

import * as React from 'react'
import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface CheckboxProps {
  children?: React.ReactNode
  labelId: string
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  'aria-label'?: string
  'aria-describedby'?: string
  labelColor?: 'text-white' | 'text-black'
}

export function Checkbox({
  children,
  labelId,
  disabled = false,
  checked,
  defaultChecked,
  onCheckedChange,
  onChange,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  labelColor = 'text-black'
}: CheckboxProps) {
  const handleCheckedChange = React.useCallback(
    (checked: boolean) => {
      if (onCheckedChange) {
        onCheckedChange(checked)
      }
      if (onChange) {
        const syntheticEvent = {
          target: { checked, value: checked ? 'on' : '' },
          currentTarget: { checked, value: checked ? 'on' : '' }
        } as React.ChangeEvent<HTMLInputElement>
        onChange(syntheticEvent)
      }
    },
    [onCheckedChange, onChange]
  )

  return (
    <label
      className={cn(
        'flex items-center gap-3 cursor-pointer select-none',
        disabled && 'cursor-not-allowed opacity-60',
        labelColor === 'text-white' && 'text-white',
        labelColor === 'text-black' && 'text-black'
      )}
      htmlFor={labelId}
    >
      <ShadcnCheckbox
        id={labelId}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={handleCheckedChange}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        className={cn(
          'cursor-pointer',
          'flex',
          'items-center',
          'justify-center',
          'w-[1.8rem]',
          'h-[1.8rem]',
          'border-[0.2rem]',
          'border-dark-gray',
          'rounded-[0.2rem]',
          'transition-[background-color,border-color]',
          'duration-100',
          'relative',
          'outline-none',
          'before:content-[""]',
          'before:w-[0.6rem]',
          'before:h-[0.9rem]',
          'before:border-[0.2rem]',
          'before:border-white',
          'before:border-t-0',
          'before:border-l-0',
          'before:rotate-45',
          'before:absolute',
          'before:top-[0.1rem]',
          'before:opacity-0',
          'before:transition-opacity',
          'before:duration-100',
          'focus-visible:outline-2',
          'focus-visible:outline-offset-2',
          'focus-visible:outline-primary',
          'focus:shadow-[0_0_0.5rem_var(--color-primary)]',
          'data-[state=checked]:border-primary',
          'data-[state=checked]:bg-primary',
          'data-[state=checked]:before:opacity-100',
          'disabled:cursor-not-allowed',
          'disabled:opacity-60',
          '[&_[data-slot=checkbox-indicator]]:hidden'
        )}
      />
      {children}
    </label>
  )
}
