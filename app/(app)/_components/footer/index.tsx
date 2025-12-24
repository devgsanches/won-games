import Image from 'next/image'
import { SimpleUnderline } from '../simple-urderline'

export function Footer() {
  const contacts = ['suporte@wongames.gg', '+55 21 33283719']

  const followUs = ['Instagram', 'Twitter', 'YouTube', 'Facebook']

  const links = ['Loja', 'Explorar', 'Buscar', 'FAQ']

  const location = [
    'Rua 7 de Maio',
    '527  - 89020330',
    'Rio de Janeiro, Brasil'
  ]
  return (
    <footer className="bg-white text-black flex flex-col gap-6.25 relative">
      <div className="bg-white h-10 footer-polygon absolute w-full -top-10"></div>
      <div className="p-6">
        <div>
          <Image
            src="/logo-with-text.png"
            alt="Won Games"
            width={100}
            height={100}
          />
        </div>
        <div className="grid grid-cols-2 space-y-8 mt-6.25 gap-6.25">
          <div className="flex flex-col gap-4">
            <div>
              <p className="uppercase font-semibold">contato</p>
              <SimpleUnderline color="green" position="horizontal" />
            </div>
            <div className="flex flex-col gap-1.5">
              {contacts.map((c) => (
                <p key={c} className="text-sm text-gray-3">
                  {c}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="uppercase font-semibold">nos acompanhe</p>
              <SimpleUnderline color="green" position="horizontal" />
            </div>
            <div className="flex flex-col gap-1.5">
              {followUs.map((c) => (
                <p key={c} className="text-sm text-gray-3">
                  {c}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="uppercase font-semibold">links</p>
              <SimpleUnderline color="green" position="horizontal" />
            </div>
            <div className="flex flex-col gap-1.5">
              {links.map((c) => (
                <p key={c} className="text-sm text-gray-3">
                  {c}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="uppercase font-semibold">localização</p>
              <SimpleUnderline color="green" position="horizontal" />
            </div>
            <div className="flex flex-col gap-1.5">
              {location.map((c) => (
                <p key={c} className="text-sm text-gray-3">
                  {c}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-gray-3">
          Won Games 2025 © Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  )
}
