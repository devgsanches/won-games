import { FormSignUp } from '@/app/(app)/_components/FormSignUp'
import { Logo } from '@/app/(app)/_components/Logo'
import Link from 'next/link'

export function SignUpTemplate() {
  return (
    <div className="justify-center items-center px-6 flex flex-col mt-32 md:mt-0">
      <Link href={'/'} className="w-fit h-fit ">
        <Logo color="black" size="large" id="logo-sign-up" />
      </Link>
      <div className="mt-22.75 w-full flex justify-center">
        <div className="md:w-95 w-full flex justify-center">
          <FormSignUp />
        </div>
      </div>
    </div>
  )
}
