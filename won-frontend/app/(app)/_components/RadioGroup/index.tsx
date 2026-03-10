'use client'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

interface RadioGroupTemplateProps {
  radios: {
    id: string
    value: string
    label?: string
    disabled?: boolean
  }[]
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
  labelColor?: 'text-white' | 'text-black'
}

export function RadioGroupTemplate({
  radios,
  defaultValue,
  value,
  onValueChange,
  disabled = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  labelColor = 'text-black'
}: RadioGroupTemplateProps) {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      disabled={disabled}
      className={cn('w-fit')}
    >
      {radios.map((r) => {
        return (
          <div key={r.id} className="flex items-center gap-5.5  md:gap-2.5">
            <RadioGroupItem
              value={r.value}
              id={r.id}
              disabled={r.disabled || disabled}
              className={cn(
                'cursor-pointer',
                'flex',
                'items-center',
                'justify-center',
                'appearance-none',
                'w-[1.5rem]',
                'h-[1.5rem]',
                'border-[0.2rem]',
                'border-primary',
                'rounded-full',
                'bg-transparent',
                'transition-[background-color]',
                'duration-100',
                'outline-none',
                'relative',
                'before:content-[""]',
                'before:w-[0.7rem]',
                'before:h-[0.7rem]',
                'before:rounded-full',
                'before:bg-primary',
                'before:absolute',
                'before:top-1/2',
                'before:left-1/2',
                'before:-translate-x-1/2',
                'before:-translate-y-1/2',
                'before:opacity-0',
                'before:transition-opacity',
                'before:duration-100',
                'focus:shadow-[0_0_0.5rem_var(--color-primary)]',
                'data-[state=checked]:before:opacity-100',
                'disabled:cursor-not-allowed',
                'disabled:opacity-60',

                '[&_[data-slot=radio-group-indicator]]:hidden'
              )}
            />
            <Label
              htmlFor={r.id}
              className={cn(
                'font-normal text-sm cursor-pointer select-none',
                (r.disabled || disabled) && 'cursor-not-allowed opacity-60',
                labelColor === 'text-white' && 'text-white',
                labelColor === 'text-black' && 'text-black'
              )}
            >
              {r.label}
            </Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}
