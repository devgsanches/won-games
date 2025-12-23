'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileNavbar() {
  const optionsLogged = [
    {
      label: 'Início',
      href: '/'
    },
    {
      label: 'Explorar',
      href: '/explorar'
    },
    {
      label: 'Minha conta',
      href: '/minha-conta'
    },
    {
      label: 'Lista de desejos',
      href: '/lista-de-desejos'
    }
  ]

  const pathname = usePathname()

  const isActive = (href: string) => pathname === href
  return (
    <nav className="p-6 flex items-center sm:hidden justify-between relative">
      <Sheet>
        <SheetTrigger>
          <div>
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 0.75H23.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0.75 7.75H14.6368"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0.75 14.75H21.5802"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </SheetTrigger>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <SheetContent side="left" className="w-full">
          <SheetHeader></SheetHeader>
          <div className="h-full flex flex-col items-center pt-44  gap-9.5">
            {optionsLogged.map((option, i) => (
              <Link
                href={option.href}
                key={i}
                className={`text-2xl font-sans font-semibold text-sidebar-primary-foreground ${isActive(option.href) && 'underline decoration-sidebar-accent underline-offset-8 decoration-3'}`}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/logo.png"
          alt="Won Games"
          width={58}
          height={45}
          loading="eager"
        />
      </div>

      <div className="flex items-center gap-4.5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6133 14.6667H16.6667L23.32 21.3333L21.3333 23.32L14.6667 16.6667V15.6133L14.3067 15.24C12.7867 16.5467 10.8133 17.3333 8.66667 17.3333C3.88 17.3333 0 13.4533 0 8.66667C0 3.88 3.88 0 8.66667 0C13.4533 0 17.3333 3.88 17.3333 8.66667C17.3333 10.8133 16.5467 12.7867 15.24 14.3067L15.6133 14.6667ZM2.66667 8.66667C2.66667 11.9867 5.34667 14.6667 8.66667 14.6667C11.9867 14.6667 14.6667 11.9867 14.6667 8.66667C14.6667 5.34667 11.9867 2.66667 8.66667 2.66667C5.34667 2.66667 2.66667 5.34667 2.66667 8.66667Z"
            fill="#FAFAFA"
          />
        </svg>

        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.6301 11.6317C19.2206 12.355 18.4258 12.8333 17.5226 12.8333H8.55054L7.22581 15.1667H21.6774V17.5H7.22581C5.39527 17.5 4.23914 15.5983 5.11828 14.035L6.74409 11.1883L2.4086 2.33333H0V0H3.93806L5.07011 2.33333H22.8938C23.809 2.33333 24.3871 3.29 23.9415 4.06L19.6301 11.6317ZM20.8465 4.66667H6.2142L9.06839 10.5H17.5226L20.8465 4.66667ZM7.22581 18.6667C5.90108 18.6667 4.82925 19.7167 4.82925 21C4.82925 22.2833 5.90108 23.3333 7.22581 23.3333C8.55054 23.3333 9.63441 22.2833 9.63441 21C9.63441 19.7167 8.55054 18.6667 7.22581 18.6667ZM16.8723 21C16.8723 19.7167 17.9441 18.6667 19.2688 18.6667C20.5935 18.6667 21.6774 19.7167 21.6774 21C21.6774 22.2833 20.5935 23.3333 19.2688 23.3333C17.9441 23.3333 16.8723 22.2833 16.8723 21Z"
            fill="white"
          />
        </svg>
      </div>
    </nav>
  )
}
