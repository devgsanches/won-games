'use client'

import { Menu as MenuIcon, Search as SearchIcon } from 'lucide-react'
import { Logo } from '../Logo'
import Link from 'next/link'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { RegisterBox } from './components/RegisterBox'

import { useCartStore } from '../../_store/cart'
import { UserDropdown } from '../UserDropdown'
import { CartDropdown } from '../CartDropdown'
import mock from '../../_templates/Cart/mock'

interface NavbarProps {
  user?: string
  variant?: 'dark' | 'transparent'
}

export function Navbar({ user, variant = 'dark' }: NavbarProps) {

  const { items } = useCartStore()

  return (
    <div
      className={`${variant === 'dark' ? 'bg-main-bg' : 'bg-transparent'} pt-6 px-4 xl:px-0 max-w-grid-container mx-auto`}
    >
      <nav className={`hidden md:flex items-center justify-between w-full`}>
        <div className="flex items-center gap-9.5">
          <Logo color="white" size="xsmall" />
          <div className="flex items-center gap-8">
            <Link href="/" className="relative group">
              Home
              <span
                className="
    absolute
    left-1/2
    -translate-x-1/2
    -bottom-1
    h-[2px]
    w-9
    bg-primary
    scale-x-0
    transition-transform
    duration-300
    ease-out
    group-hover:scale-x-100
  "
              />
            </Link>
            <Link href="/games" className="relative group">
              Explore
              <span
                className="
    absolute
    left-1/2
    -translate-x-1/2
    -bottom-1
    h-[2px]
    w-9
    bg-primary
    scale-x-0
    transition-transform
    duration-300
    ease-out
    group-hover:scale-x-100
  "
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <SearchIcon
            strokeWidth={1.5}
            size={24}
            className="hover:text-primary transition-colors duration-300 ease-out cursor-pointer"
          />
          <CartDropdown items={items} />
          {user && <UserDropdown user={user} />}
          {!user && (
            <Link href={'/auth/sign-in'}>
              <Button size={'sm'}>Sign In</Button>
            </Link>
          )}
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden flex items-center justify-between w-full relative">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon strokeWidth={1.7} size={30} aria-label="Open menu" />
          </SheetTrigger>
          <SheetTitle></SheetTitle>
          <SheetContent className="w-full h-full bg-white text-black flex items-center justify-center">
            <nav
              className={`flex flex-col gap-8 ${!user ? 'justify-between' : 'justify-center'} h-full w-full`}
            >
              <div></div>
              <div className="flex flex-col gap-8">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
                  >
                    Home
                    <span
                      className="

    absolute
    left-1/2
    -translate-x-1/2
    -bottom-1
    h-[3px]
    w-16
    bg-primary
    scale-x-0
    transition-transform
    duration-300
    ease-out
    group-hover:scale-x-100
  "
                    />
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/games"
                    className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
                  >
                    Explore
                    <span
                      className="

    absolute
    left-1/2
    -translate-x-1/2
    -bottom-1
    h-[3px]
    w-22
    bg-primary
    scale-x-0
    transition-transform
    duration-300
    ease-out
    group-hover:scale-x-100
  "
                    />
                  </Link>
                </SheetClose>

                {user && (
                  <>
                    <SheetClose asChild>
                      <Link
                        href="/profile/me"
                        className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
                      >
                        My account
                        <span
                          className="

    absolute
    left-1/2
    -translate-x-1/2
    -bottom-1
    h-[3px]
    w-32
    bg-primary
    scale-x-0
    transition-transform
    duration-300
    ease-out
    group-hover:scale-x-100
  "
                        />
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/wishlist"
                        className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
                      >
                        Wishlist
                        <span
                          className="

   absolute
    left-1/2
    -translate-x-1/2
    -bottom-1
    h-[3px]
    w-42
    bg-primary
    scale-x-0
    transition-transform
    duration-300
    ease-out
    group-hover:scale-x-100
  "
                        />
                      </Link>
                    </SheetClose>
                  </>
                )}
              </div>
              {!user && <RegisterBox />}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="absolute left-1/2 -translate-x-1/2 w-15.5 h-12.25">
          <Logo color="white" mobile />
        </div>
        <div className="flex items-center gap-4">
          <SearchIcon strokeWidth={1.7} size={30} aria-label="Search icon" />
          <CartDropdown items={[...mock]} />
        </div>
      </nav>
    </div>
  )
}
