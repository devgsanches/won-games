'use client'

import { useState, useEffect } from 'react'

import { Separator } from '@/components/ui/separator'
import { Checkbox } from '../Checkbox'
import { Heading } from '../Heading'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { ListFilter, Search } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '../Button'
import { TextField } from '../TextField'

const filters = {
  price: [
    { id: 'price-1', value: 'under-50', label: 'De R$0,00 a R$ 50,00' },
    { id: 'price-2', value: 'under-100', label: 'Abaixo de R$100,00' },
    { id: 'price-3', value: 'under-150', label: 'Abaixo de R$150,00' },
    { id: 'price-4', value: 'under-200', label: 'Abaixo de R$200,00' },
    { id: 'price-5', value: 'free', label: 'Gratuito' },
    { id: 'price-6', value: 'discount', label: 'Com desconto' }
  ],
  sortBy: [
    { id: 'sort-high', value: 'high-to-low', label: 'Maior preço' },
    { id: 'sort-low', value: 'low-to-high', label: 'Menor preço' }
  ],
  platforms: [
    { id: 'platform-windows', value: 'windows', label: 'Windows' },
    { id: 'platform-linux', value: 'linux', label: 'Linux' },
    { id: 'platform-macos', value: 'macos', label: 'MAC' }
  ],
  categories: [
    { id: 'cat-action', value: 'action', label: 'Action' },
    { id: 'cat-adventure', value: 'adventure', label: 'Adventure' },
    { id: 'cat-fps', value: 'fps', label: 'FPS' },
    { id: 'cat-mmorpg', value: 'mmorpg', label: 'MMORPG' },
    { id: 'cat-rpg', value: 'rpg', label: 'RPG' },
    { id: 'cat-suspense', value: 'suspense', label: 'Suspense' },
    { id: 'cat-survival', value: 'survival', label: 'Survival' },
    { id: 'cat-terror', value: 'terror', label: 'Terror' }
  ]
}

export type FilterValues = {
  price: string[]
  sortBy: string
  platforms: string[]
  categories: string[]
}

interface ExploreSidebarProps {
  defaultValues?: Partial<FilterValues>
  onFilterChange?: (filters: FilterValues) => void
}

export function ExploreSidebar({
  defaultValues,
  onFilterChange
}: ExploreSidebarProps) {
  const [sortBy, setSortBy] = useState<string>(defaultValues?.sortBy ?? '')
  const [selectedPrices, setSelectedPrices] = useState<string[]>(
    defaultValues?.price ?? []
  )
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(
    defaultValues?.platforms ?? []
  )
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultValues?.categories ?? []
  )

  useEffect(() => {
    onFilterChange?.({
      price: selectedPrices,
      sortBy,
      platforms: selectedPlatforms,
      categories: selectedCategories
    })
  }, [
    selectedPrices,
    sortBy,
    selectedPlatforms,
    selectedCategories,
    onFilterChange
  ])

  const handleCheckboxChange = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value))
    } else {
      setSelected([...selected, value])
    }
  }

  const currentFilters = {
    price: selectedPrices,
    sortBy: sortBy,
    platforms: selectedPlatforms,
    categories: selectedCategories
  }

  console.log({ currentFilters })

  return (
    <>
      <div className="hidden md:block space-y-6 max-w-60 w-full">
        {/* Price Filters */}
        <div>
          <Heading
            text="Price"
            color="white"
            sidebar
            decorate={{ color: 'secondary', orientation: 'horizontal' }}
          />
          <div className="mt-4 space-y-1.5">
            {filters.price.map((option) => (
              <Checkbox
                key={option.id}
                labelId={option.id}
                labelColor="text-white"
                checked={selectedPrices.includes(option.value)}
                onCheckedChange={() =>
                  handleCheckboxChange(
                    option.value,
                    selectedPrices,
                    setSelectedPrices
                  )
                }
              >
                {option.label}
              </Checkbox>
            ))}
          </div>
          <div className="pt-6">
            <Separator
              orientation="horizontal"
              className="bg-xxlight-gray/30"
            />
          </div>
        </div>

        {/* Sort By */}
        <div>
          <Heading
            text="Sort by"
            color="white"
            sidebar
            decorate={{ color: 'secondary', orientation: 'horizontal' }}
          />
          <div className="mt-4 space-y-1.5">
            <RadioGroup
              value={sortBy}
              onValueChange={setSortBy}
              className="flex flex-col gap-4"
            >
              {filters.sortBy.map((option) => (
                <div key={option.id}>
                  <label
                    onClick={() => setSortBy(option.value)}
                    className={cn(
                      'flex items-center gap-2.5 cursor-pointer',
                      'transition-colors text-white'
                    )}
                  >
                    <RadioGroupItem
                      value={option.value}
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
                    {option.label}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="pt-6">
            <Separator
              orientation="horizontal"
              className="bg-xxlight-gray/30"
            />
          </div>
        </div>

        {/* Platform Filters */}
        <div>
          <Heading
            text="Platform"
            color="white"
            sidebar
            decorate={{ color: 'secondary', orientation: 'horizontal' }}
          />
          <div className="mt-4 space-y-1.5">
            {filters.platforms.map((option) => (
              <Checkbox
                key={option.id}
                labelId={option.id}
                labelColor="text-white"
                checked={selectedPlatforms.includes(option.value)}
                onCheckedChange={() =>
                  handleCheckboxChange(
                    option.value,
                    selectedPlatforms,
                    setSelectedPlatforms
                  )
                }
              >
                {option.label}
              </Checkbox>
            ))}
          </div>
          <div className="pt-6">
            <Separator
              orientation="horizontal"
              className="bg-xxlight-gray/30"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <Heading
            text="Category"
            color="white"
            sidebar
            decorate={{ color: 'secondary', orientation: 'horizontal' }}
          />
          <div className="mt-4 space-y-1.5">
            {filters.categories.map((option) => (
              <Checkbox
                key={option.id}
                labelId={option.id}
                labelColor="text-white"
                checked={selectedCategories.includes(option.value)}
                onCheckedChange={() =>
                  handleCheckboxChange(
                    option.value,
                    selectedCategories,
                    setSelectedCategories
                  )
                }
              >
                {option.label}
              </Checkbox>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between gap-4.5 w-full">
        <TextField
          placeholder="What are you looking for?"
          search
          direction="right"
          icon={<Search />}
        />
        <Sheet>
          <SheetTrigger asChild>
            <ListFilter size={38} />
          </SheetTrigger>
          <SheetContent className="w-full bg-white overflow-y-auto">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div className="space-y-6 p-6 max-h-[calc(100vh-8rem)] overflow-y-auto ">
              <div>
                <Heading
                  text="Price"
                  color="black"
                  sidebar
                  decorate={{ color: 'secondary', orientation: 'horizontal' }}
                />
                <div className="mt-4 space-y-1.5">
                  {filters.price.map((option) => (
                    <Checkbox
                      key={option.id}
                      labelId={option.id}
                      labelColor="text-black"
                      checked={selectedPrices.includes(option.value)}
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          option.value,
                          selectedPrices,
                          setSelectedPrices
                        )
                      }
                    >
                      {option.label}
                    </Checkbox>
                  ))}
                </div>
                <div className="pt-6">
                  <Separator
                    orientation="horizontal"
                    className="bg-xxlight-gray/30"
                  />
                </div>
              </div>
              <div>
                <Heading
                  text="Sort by"
                  color="black"
                  sidebar
                  decorate={{ color: 'secondary', orientation: 'horizontal' }}
                />
                <div className="mt-4 space-y-1.5">
                  <RadioGroup
                    value={sortBy}
                    onValueChange={setSortBy}
                    className="flex flex-col gap-4"
                  >
                    {filters.sortBy.map((option) => (
                      <div key={option.id}>
                        <label
                          onClick={() => setSortBy(option.value)}
                          className={cn(
                            'flex items-center gap-2.5 cursor-pointer',
                            'transition-colors text-black'
                          )}
                        >
                          <RadioGroupItem
                            value={option.value}
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
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="pt-6">
                  <Separator
                    orientation="horizontal"
                    className="bg-xxlight-gray/30"
                  />
                </div>
              </div>
              <div>
                <Heading
                  text="Platform"
                  color="black"
                  sidebar
                  decorate={{ color: 'secondary', orientation: 'horizontal' }}
                />
                <div className="mt-4 space-y-1.5">
                  {filters.platforms.map((option) => (
                    <Checkbox
                      key={option.id}
                      labelId={option.id}
                      labelColor="text-black"
                      checked={selectedPlatforms.includes(option.value)}
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          option.value,
                          selectedPlatforms,
                          setSelectedPlatforms
                        )
                      }
                    >
                      {option.label}
                    </Checkbox>
                  ))}
                </div>
                <div className="pt-6">
                  <Separator
                    orientation="horizontal"
                    className="bg-xxlight-gray/30"
                  />
                </div>
              </div>
              {/* Category Filters */}
              <div>
                <Heading
                  text="Category"
                  color="black"
                  sidebar
                  decorate={{ color: 'secondary', orientation: 'horizontal' }}
                />
                <div className="mt-4 space-y-1.5">
                  {filters.categories.map((option) => (
                    <Checkbox
                      key={option.id}
                      labelId={option.id}
                      labelColor="text-black"
                      checked={selectedCategories.includes(option.value)}
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          option.value,
                          selectedCategories,
                          setSelectedCategories
                        )
                      }
                    >
                      {option.label}
                    </Checkbox>
                  ))}
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className="w-full">
              <Separator
                orientation="horizontal"
                className="bg-xxlight-gray/50"
              />
              <div className="p-6">
                <SheetClose asChild>
                  <Button className="capitalize" fullWidth size="lg">
                    filtrar
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
