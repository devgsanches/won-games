'use client'

import Image from 'next/image'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

export interface Card {
  id: string
  flag: string
  cardNumber: string
}

interface CardOptionProps {
  cards: Card[]
  value?: string
  onValueChange?: (value: string) => void
}

export function CardOption({ cards, value, onValueChange }: CardOptionProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onValueChange}
      className="flex flex-col gap-2"
    >
      {cards.map((card) => (
        <div className="bg-input hover:bg-input/80" key={card.id}>
          <label
            key={card.id}
            htmlFor={card.id}
            className={cn(
              'flex justify-between items-center w-88 p-4 cursor-pointer',
              'transition-colors '
            )}
          >
            <div className="flex items-center gap-3 text-black">
              <Image
                src={`/flags/${card.flag}.png`}
                alt={card.flag}
                width={38}
                height={24}
              />
              {card.cardNumber}
            </div>
            <RadioGroupItem
              value={card.id}
              id={card.id}
              className={cn(
                'cursor-pointer',
                'flex',
                'items-center',
                'justify-center',
                'appearance-none',
                'w-6',
                'h-6',
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
                '**:data-[slot=radio-group-indicator]:hidden'
              )}
            />
          </label>
        </div>
      ))}
    </RadioGroup>
  )
}
