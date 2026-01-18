import { Button } from '../../../Button'
import Link from 'next/link'

export function RegisterBox() {
  return (
    <div className="flex flex-col w-full px-17 pb-14 gap-3">
      <Button fullWidth>Entrar</Button>
      <span className="text-center text-light-gray text-xs font-medium">
        ou
      </span>
      <Button variant="link" to="/register">
        Crie sua conta
      </Button>
    </div>
  )
}
