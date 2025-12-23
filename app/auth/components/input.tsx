import { Input as InputShadcn } from '@/components/ui/input'
import { LockKeyhole, MailIcon } from 'lucide-react'

export interface Props {
  email?: boolean
  password?: boolean
  placeholder: string
}

export function Input({ email, password, placeholder, ...props }: Props) {
  return (
    <div className="relative flex items-center">
      {email && (
        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-2 size-5" />
      )}
      {password && (
        <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-2 size-5" />
      )}
      <InputShadcn
        className="bg-gray-1 placeholder:text-gray-2 placeholder:text-sm pl-10 h-12.5 rounded-none"
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        {...props}
      />
    </div>
  )
}
