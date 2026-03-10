'use client'

import { ChevronDownIcon, CircleUserIcon, Heart, LogOut } from 'lucide-react'
import { Dropdown } from '../Dropdown'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface UserDropdownProps {
  user: React.ReactNode
}

const profileOptions = [
  {
    icon: CircleUserIcon,
    label: 'My account',
    href: '/profile/me'
  },
  {
    icon: Heart,
    label: 'Wishlist',
    href: '/wishlist'
  },
  {
    icon: LogOut,
    label: 'Logout',
    href: '/auth/sign-in'
  }
]

export function UserDropdown({ user }: UserDropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      align="end"
      sideOffset={16}
      alignOffset={-8}
      trigger={
        <>
          <CircleUserIcon
            size={24}
            strokeWidth={1.5}
            className="transition-colors duration-200"
          />
          <span className="max-w-26 truncate font-medium transition-colors duration-200">
            {user}
          </span>
          <ChevronDownIcon
            size={24}
            className={cn(
              'text-gray transition-all duration-200',
              'group-hover:text-primary',
              open && 'rotate-180 text-primary'
            )}
          />
        </>
      }
    >
      <nav className="py-2">
        {profileOptions.map((option, index) => {
          const Icon = option.icon
          const isLast = index === profileOptions.length - 1

          return (
            <Link
              key={option.label}
              href={option.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-3',
                'text-black hover:bg-gray-50 hover:text-primary',
                'transition-colors duration-200',

              )}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium">{option.label}</span>
            </Link>
          )
        })}
      </nav>
    </Dropdown>
  )
}
