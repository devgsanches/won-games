import { ChevronDown } from "lucide-react";

export function ShowMore() {
  return (
    <div className="flex justify-center">
      <div className="w-fit flex flex-col items-center font-semibold uppercase cursor-pointer">
        <p>Carregar mais</p>
        <ChevronDown color="#F231A5" size={28} />
      </div>
    </div>
  )
}
