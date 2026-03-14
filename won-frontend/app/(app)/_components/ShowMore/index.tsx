'use client'

import { Button } from "../Button";
import Link from "next/link";
import { EmptyDecorate } from "../Empty";
import { useSearchParams } from "next/navigation";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";


type ShowMoreProps = {
  currentPage: number
  hasGames: boolean
}


export function ShowMore({ currentPage, hasGames }: ShowMoreProps) {

  return hasGames ? (
    <div className="flex justify-center">
      <div className="w-40 flex items-center justify-between gap-2">
        <Link href={`/games?page=${currentPage - 1}`}>
          <Button variant="default" size="sm" >
            <ArrowBigLeft fill="white" />
          </Button>
        </Link>
        <Link href={`/games?page=${currentPage + 1}`}>
          <Button variant="default" size="sm" >
            <ArrowBigRight fill="white" />
          </Button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-6">
      <EmptyDecorate />
      <Link href={`/games?page=1`}>
        <Button variant="default" size="sm" >
          Voltar ao início
        </Button>
      </Link>
    </div>
  )
}
