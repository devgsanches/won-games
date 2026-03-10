import { Download } from 'lucide-react'
import Image from 'next/image'

interface GameItemProps {
  id?: string
  imgUrl: string
  name: string
  price?: number
  cardNumber?: number
  purchaseDate?: string
  flag?: string
}

export function GameItem({
  id,
  imgUrl,
  name,
  price,
  cardNumber,
  purchaseDate,
  flag
}: GameItemProps) {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex md:gap-6 gap-2.5 pb-6">
            <div
              className="min-w-24 w-full md:w-37.75 md:h-18.5 h-14 bg-cover bg-center"
              style={{ backgroundImage: `url(${imgUrl})` }}
            />
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="flex items-center  md:justify-start gap-2.5 w-full">
                <p className="text-black font-semibold truncate md:w-60 w-50">
                  {name}{' '}
                </p>
                {cardNumber && (
                  <Download
                    color="#F231A5"
                    strokeWidth={2}
                    size={24}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div className="bg-secondary rounded-[2px] p-1.5 flex items-center w-20 h-5.75">
                <p className="font-medium text-white">R${price},00</p>
              </div>
            </div>
          </div>
          {cardNumber && (
            <div className="text-gray flex md:flex-col flex-col-reverse md:items-end text-sm md:gap-7 gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2 ">
                *** *** **** 4325{' '}
                <Image
                  src="/flags/visa.png"
                  alt={flag ?? ''}
                  width={38}
                  height={24}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <p className="md:text-end">
                  Compra realizada em 14/02/2026 às 20:32
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
