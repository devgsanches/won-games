import Image from 'next/image'

export function EmptyDecorate() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/empty.svg" alt="Empty" width={300} height={300} />
      <div className="flex flex-col items-center gap-2 mt-2">
        <p className="text-primary text-xlarge md:text-xxlarge font-bold">
          Nenhum resultado encontrado
        </p>
        <p className="text-white text-sm text-center">
          Infelizmente não achamos nenhum resultado <br /> para a sua busca.
        </p>
      </div>
    </div>
  )
}
