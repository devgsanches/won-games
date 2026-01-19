import {
  ChevronDown as ChevronDownIcon,
  CircleUser as CircleUserIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react'
import { Logo } from '../Logo'
import Link from 'next/link'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle
} from '@/components/ui/sheet'
import { MenuFull } from './components/MenuSheet'

interface NavbarProps {
  user?: string
}

export function Navbar({ user = 'Guilherme' }) {
  return (
    <>
      {/* TABLET AND DESKTOP NAVBAR */}
      <nav className="hidden md:flex  items-center justify-between w-full p-10 px-20">
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
            <Link href="/explore" className="relative group">
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
          <SearchIcon strokeWidth={1.5} size={24} />
          <ShoppingCartIcon strokeWidth={1.5} size={24} />
          {user && (
            <div className="flex items-center gap-2.5 cursor-pointer">
              <CircleUserIcon />
              <span>{user}</span>
              <ChevronDownIcon color="gray" />
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden flex items-center justify-between w-full relative pt-8 px-6">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon strokeWidth={1.5} size={23} aria-label="Open menu" />
          </SheetTrigger>
          <SheetTitle></SheetTitle>
          <MenuFull />
        </Sheet>
        <div className="absolute left-1/2 -translate-x-1/2 w-15.5 h-12.25">
          <Logo color="white" mobile />
        </div>
        <div className="flex items-center gap-4">
          <SearchIcon strokeWidth={1.5} size={23} aria-label="Search icon" />
          <ShoppingCartIcon
            strokeWidth={1.5}
            size={23}
            aria-label="Cart icon"
          />
        </div>
      </nav>
    </>
  )
}
