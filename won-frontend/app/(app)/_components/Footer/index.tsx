import { Heading } from '../Heading'
import { Logo } from '../Logo'

export function Footer() {
  return (
    <footer className="bg-white text-black relative">
      <div
        className="absolute -top-12 left-0 right-0 w-full h-12 bg-white"
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 100% 0)'
        }}
      />
      <div className="flex flex-col gap-6 p-6 md:max-w-7xl md:mx-auto">
        <div>
          <Logo color="black" id="logo-footer" />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 space-y-6 gap-16">
          <div className="uppercase flex flex-col gap-3.75">
            <Heading
              text="Contact"
              color="black"
              decorate={{ color: 'secondary', orientation: 'horizontal' }}
              size="large"
            />
            <div className="text-light-gray flex flex-col gap-1.5">
              <a href="mailto:suporte@wongames.gg" className="text-sm">
                suporte@wongames.gg
              </a>

              <a href="tel:+55 21 33283719">+55 21 33283719</a>
            </div>
          </div>
          <div className="flex flex-col gap-3.75 uppercase">
            {' '}
            <Heading
              text="Follow us"
              color="black"
              decorate={{ color: 'secondary', orientation: 'horizontal' }}
              size="large"
            />
            <div className="text-light-gray flex flex-col gap-1.5 first-letter:capitalize text-sm capitalize">
              <a href="/">Instagram</a>
              <a href="/">Twitter</a>
              <a href="/">YouTube</a>
              <a href="/">Facebook</a>
            </div>
          </div>
          <div className="flex flex-col gap-3.75 uppercase">
            {' '}
            <Heading
              text="Links"
              color="black"
              decorate={{ color: 'secondary', orientation: 'horizontal' }}
              size="large"
            />
            <div className="text-light-gray flex flex-col gap-1.5 first-letter:capitalize capitalize">
              <a href="/">Store</a>
              <a href="/">Explore</a>
              <a href="/">Search</a>
              <a href="/">FAQ</a>
            </div>
          </div>
          <div className="flex flex-col gap-3.75">
            {' '}
            <div className="uppercase">
              <Heading
                text="Location"
                color="black"
                decorate={{ color: 'secondary', orientation: 'horizontal' }}
                size="large"
              />
            </div>
            <div className="text-light-gray flex flex-col gap-1.5 text-sm first-letter:capitalize ">
              <p>7 de Maio Street</p>
              <span>527 - 89020330</span>
              <a href="/">Rio de Janeiro, Brazil</a>
            </div>
          </div>
        </div>
        <p className="text-light-gray text-xs text-center">
          Won Games 2020 © All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
