import Image from 'next/image'
import { Button } from '../Button'

export interface HighlightProps {
  title: string
  subtitle: string
  textDirection: 'left' | 'right'
  textButton: string
}

export function Highlight({
  title,
  subtitle,
  textDirection,
  textButton
}: HighlightProps) {
  return (
    <div className="relative h-57.5 w-full md:w-full overflow-hidden">
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
          className={`relative h-full w-full ${textDirection === 'left' ? 'grid grid-cols-[62%_38%]' : 'grid grid-cols-[38%_62%]'}  ${textDirection === 'left' ? 'md:grid-cols-[80%_20%]' : 'md:grid-cols-[20%_80%]'}`}
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
            <div className="flex items-end w-full h-full md:relative">
              <div className="md:flex md:absolute md:h-full md:w-full lg:left-10 w-full h-full flex items-end">
                <Image
                  src="/bully.png"
                  alt="Avatar"
                  width={266}
                  height={310}
                  className="w-46.5 h-46.5 md:h-full md:w-full object-cover"
                />
              </div>
            </div>
          )}
          {textDirection === 'left' ? (
            <div className="flex items-end w-full h-full md:relative">
              <div className="md:flex md:absolute md:h-full md:w-full lg:right-10 w-full h-full flex items-end">
                <Image
                  src="/bully.png"
                  alt="Avatar"
                  width={266}
                  height={310}
                  className="w-46.5 h-46.5 md:h-full md:w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4 md:gap-3 pr-2.75 md:pr-12 md:pb-12 md:justify-end">
              <div className="pt-4.75 flex flex-col md:items-end">
                <p className="text-lg md:text-xxxlarge font-semibold truncate ">
                  {title}
                </p>
                <p className="text-sm md:text-base md:max-w-3xl font-light text-right">{subtitle}</p>
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
