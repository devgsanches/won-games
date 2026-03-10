import { Button } from '../../../Button'

export function RegisterBox() {
  return (
    <div className="flex flex-col w-full px-17 pb-14 gap-3">
      <Button fullWidth to="/auth/sign-in">
        Entrar
      </Button>
      <span className="text-center text-light-gray text-xs font-medium">
        ou
      </span>
      <Button variant="link" to="/auth/sign-up">
        Crie sua conta
      </Button>
    </div>
  )
}
