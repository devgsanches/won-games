import { Button } from '../Button'
import { Ribbon } from '../Ribbon'

interface BannerProps {
  imageUrl: string
  title?: string
  subtitle?: string
  gameName?: string
}

export function Banner({ imageUrl, title, subtitle, gameName }: BannerProps) {
  return (
    <>
      <div className="md:hidden">
        {/* Image */}
        <div
          className="w-full h-58 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageUrl}')`
          }}
        />

        {/* Caption */}
        <div className="bg-dark-gray h-36 py-4 px-5">
          <div className="flex flex-col gap-2.75">
            <div>
              <p className="text-xlarge font-semibold">{title}</p>
              <p className="text-sm truncate">
                {subtitle}{' '}
                <span className="text-primary font-bold">{gameName}</span>
              </p>
            </div>
            <div>
              <Button size="md">Comprar agora</Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden md:flex h-146 w-260.5 bg-cover bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded"
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
      >
        <Ribbon>New Release</Ribbon>
        <div className="h-55.5 absolute bottom-0 bg-black/70 w-full pt-8 px-11 flex flex-col gap-6">
          <div>
            <p className="text-xxxlarge font-semibold">{title}</p>
            <p className="text-xlarge">
              {subtitle} {''}
              <span className="text-primary font-bold">{gameName}</span>
            </p>
          </div>
          <div>
            <Button size="lg">Comprar agora</Button>
          </div>
        </div>
      </div>
    </>
  )
}
