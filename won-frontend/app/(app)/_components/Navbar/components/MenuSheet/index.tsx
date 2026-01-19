import { SheetContent } from '@/components/ui/sheet'
import Link from 'next/link'
import { RegisterBox } from '../RegisterBox'

interface MenuFullProps {
  username?: string
}

export function MenuFull({ username }: MenuFullProps) {
  return (
    <SheetContent className="w-full h-full bg-white text-black flex items-center justify-center">
      <nav
        className={`flex flex-col gap-8 ${!username ? 'justify-between' : 'justify-center'} h-full w-full`}
      >
        <div></div>
        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
          >
            Início
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

          <Link
            href="/explore"
            className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
          >
            Explorar
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
          {username && (
            <>
              <Link
                href="/"
                className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
              >
                Minha conta
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

              <Link
                href="/"
                className="relative group first-letter:capitalize
              text-xxxlarge
              text-center
              font-semibold"
              >
                Lista de desejos
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
            </>
          )}
        </div>
        {!username && <RegisterBox />}
      </nav>
    </SheetContent>
  )
}
