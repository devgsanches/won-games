import Link from 'next/link'
import { Heading } from '../(app)/_components/Heading'
import { Logo } from '../(app)/_components/Logo'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-family-poppins min-h-screen w-full flex bg-white">
      <div className="md:grid md:grid-cols-2 w-full">
        <div className="hidden md:flex bg-[url(/bg-auth.svg)] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/85" />
          <div className="absolute flex flex-col justify-between pl-13.75 pt-13.75 pb-6.25 h-full">
            <Link href={'/'} className="w-fit h-fit ">
              <Logo color="white" size="xsmall" />
            </Link>
            <div className="space-y-4.5 2xl:pr-55">
              <Heading
                text="Your favorite games in one place."
                color="white"
                size="huge"
              />
              <p className="text-xxlarge font-light">
                <span className="text-primary font-semibold">WON</span> is the
                best and most complete <br /> gaming platform.
              </p>
            </div>
            <div></div>
            <p className="text-center">Won Games 2026 © All Rights Reserved</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
