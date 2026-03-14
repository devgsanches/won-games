import Link from 'next/link'
import type { GameCardResponse } from '../../_templates/Home'
import { Button } from '../Button'
import { Ribbon } from '../Ribbon'

export type BannerProps = Omit<GameCardResponse, '__typename' | 'developers'> & {
  ribbonText?: string
}

export function Banner({
  cover,
  title,
  slug,
  ribbonText
}: BannerProps) {
  return (
    <div
      className="md:max-w-3xl lg:max-w-4xl w-full h-94 md:h-122 lg:h-132 select-none mx-auto
"
    >
      <div className="md:hidden h-full">
        <div
          className="w-full h-58 bg-cover bg-center"
          style={{
            backgroundImage: `url('http://localhost:1337${cover.url ?? 'https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder-103.png?fit=1200%2C800&ssl=1&w=640'}')`
          }}
        />

        <div className="bg-dark-gray h-36 py-4 px-5 w-full">
          <div className="flex flex-col gap-2.75">
            <div>
              <p className="text-xlarge font-semibold truncate">{title}</p>
              <p className="text-sm truncate first-letter:uppercase">
                jogue a nova temporada de {""}
                <span className="text-primary font-bold">{title}</span>
              </p>
            </div>
            <div>
              <Link href={`/game/${slug}`}>
                <Button size="md">Buy now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative w-full h-full z-10">
        <div
          className="h-full w-full bg-cover bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded z-10"
          style={{
            backgroundImage: `url('http://localhost:1337${cover.url ?? 'https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder-103.png?fit=1200%2C800&ssl=1&w=640'}')`
          }}
        >
          {ribbonText && (
            <div className="relative w-full h-full overflow-visible">
              <div className="absolute w-full h-full overflow-visible">
                <Ribbon>New Release</Ribbon>
              </div>
            </div>
          )}
          <div className="h-55.5 absolute bottom-0 bg-black/70 w-full pt-8 px-11 flex flex-col gap-6 rounded-b">
            <div>
              <p className="text-xxxlarge font-semibold">{title}</p>
              <p className="text-xlarge">
                jogue a nova temporada de {""}
                <span className="text-primary font-bold">{title}</span>
              </p>
            </div>
            <div>
              <Link href={`/game/${slug}`}>
                <Button size="lg">Buy now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
