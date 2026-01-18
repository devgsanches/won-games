import Image from 'next/image'
import { Button } from '../Button'

interface HighlightProps {
  title: string
  subtitle: string
  textDirection: 'left' | 'right'
  textButton: string
}

export function Highlight({
  title = 'A escola nunca foi tão perigosa',
  subtitle = 'Domine os corredores, enfrente os valentões e faça seu nome',
  textDirection = 'right',
  textButton = 'Comprar agora'
}: HighlightProps) {
  return (
    <div className="relative h-57.5 w-full md:w-260.5 overflow-hidden">
      <div
        className={`absolute h-full w-full
          bg-[url(/bully_cover.jpg)]
          bg-cover
          bg-center
          bg-no-repeat
          md:bg-position-[center_-55px]`}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div
          className={`relative h-full w-full ${textDirection === 'left' ? 'grid grid-cols-[68%_32%]' : 'grid grid-cols-[32%_68%]'}  ${textDirection === 'left' ? 'md:grid-cols-[80%_20%]' : 'md:grid-cols-[20%_80%]'}`}
        >
          {textDirection === 'left' ? (
            <div className="w-full flex flex-col gap-4 md:gap-3 pl-2.75 md:pl-12 md:pb-12 md:justify-end">
              <div className="pt-4.75 flex flex-col md:items-start">
                <p className="text-lg md:text-xxxlarge font-semibold truncate">
                  {title}
                </p>
                <p className="text-sm md:text-lg font-light ">{subtitle}</p>
              </div>

              <div className="flex justify-start md:pr-0">
                <Button size="md">{textButton}</Button>
              </div>
            </div>
          ) : (
            <div className="flex items-end w-full h-full relative">
              <div className="md:flex absolute md:h-full md:w-full left-0 md:left-10">
                <Image
                  src="/bully.png"
                  alt="Avatar"
                  width={266}
                  height={310}
                  className="w-40.5 h-40.5 md:h-full md:w-full object-cover"
                />
              </div>
            </div>
          )}
          {textDirection === 'left' ? (
            <div className="flex items-end w-full h-full relative">
              <div className="md:flex absolute md:h-full md:w-full right-0 md:right-10">
                <Image
                  src="/bully.png"
                  alt="Avatar"
                  width={266}
                  height={310}
                  className="w-40.5 h-40.5 md:h-full md:w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4 md:gap-3 pr-2.75 md:pr-12 md:pb-12 md:justify-end">
              <div className="pt-4.75 flex flex-col md:items-end">
                <p className="text-lg md:text-xxxlarge font-semibold truncate">
                  {title}
                </p>
                <p className="text-sm md:text-lg font-light ">{subtitle}</p>
              </div>

              <div className="flex justify-end pr-3 md:pr-0">
                <Button size="md">{textButton}</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
