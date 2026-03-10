'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Heading } from '../Heading'
import { Platforms } from './components/Platforms'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export interface GameDetailsProps {
  developer: string[]
  categories: string[]
  publishers: string[]
  rating: string
  releaseDate: string
  platforms: string[]
}

export function GameDetails({
  developer,
  categories,
  publishers,
  rating,
  releaseDate,
  platforms = ['windows', 'linux', 'macos']
}: GameDetailsProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="flex flex-col gap-10.5">
      {!isMobile && (
        <Heading
          text="Game details"
          color="white"
          size="xxlarge"
          decorate={{ color: 'secondary', orientation: 'vertical' }}
        />
      )}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
        <div className="flex flex-col gap-[3px]">
          <p className="text-sm font-normal text-xxlight-gray">Developer</p>
          <p>Gearbox Software</p>
        </div>
        <div className="flex flex-col gap-[3px]">
          {!isMobile ? (
            <>
              <p className="text-sm font-normal text-xxlight-gray">
                Release date
              </p>
              <p>Sep 13, 2019</p>
            </>
          ) : (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Publisher</p>
              <p>Gearbox Software</p>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[3px]">
          {!isMobile ? (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Platforms</p>
              <Platforms platforms={platforms} />
            </>
          ) : (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Category</p>
              <p>Action / Adventure</p>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[3px]">
          {!isMobile ? (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Publisher</p>
              <p>Gearbox Software</p>
            </>
          ) : (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Rating</p>
              <p>14+</p>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[3px]">
          {!isMobile ? (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Rating</p>
              <p>14+</p>
            </>
          ) : (
            <>
              <p className="text-sm font-normal text-xxlight-gray">
                Release date
              </p>
              <p>Sep 13, 2019</p>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[3px] md:mt-4">
          {!isMobile ? (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Category</p>
              <p>Action / Adventure</p>
            </>
          ) : (
            <>
              <p className="text-sm font-normal text-xxlight-gray">Platforms</p>
              <Platforms platforms={platforms} />
            </>
          )}
        </div>
      </div>
      <div>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="gap-6.5">
            <TabsTrigger
              value="account"
              className="capitalize border-none bg-transparent! text-xl md:text-2xl text-xxlight-gray data-[state=active]:text-white data-[state=active]:decoration-primary data-[state=active]:underline data-[state=active]:underline-offset-10 data-[state=active]:decoration-4 p-0"
            >
              windows
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="border-none bg-transparent! text-xl md:text-2xl text-xxlight-gray data-[state=active]:text-white data-[state=active]:decoration-primary data-[state=active]:underline data-[state=active]:underline-offset-10 data-[state=active]:decoration-4 p-0"
            >
              MacOS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="grid grid-cols-2 gap-6 mt-11">
              <div className="space-y-10">
                <div>
                  <p className="text-xlarge font-medium">Minimum</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">OS</p>
                  <p className="font-medium">Window 7/8/10</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">Processor</p>
                  <p className="font-medium">Core i3 3.3GHZ</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">GPU</p>
                  <p className="font-medium">Intel HB 4000</p>
                </div>
              </div>
              <div className="space-y-10">
                <div>
                  <p className="text-xlarge font-medium">Recommended</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">OS</p>
                  <p className="font-medium">Window 7/8/10</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">Processor</p>
                  <p className="font-medium">Core i5 3.3GHZ</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">GPU</p>
                  <p className="font-medium">Intel HB 4000</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="grid grid-cols-2 gap-6 mt-11">
              <div className="space-y-10">
                <div>
                  <p className="text-xlarge font-medium">Minimum</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">OS</p>
                  <p className="font-medium">Window 7/8/10</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">Processor</p>
                  <p className="font-medium">Core i3 3.3GHZ</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">GPU</p>
                  <p className="font-medium">Intel HB 4000</p>
                </div>
              </div>
              <div className="space-y-10">
                <div>
                  <p className="text-xlarge font-medium">Recommended</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">OS</p>
                  <p className="font-medium">Window 7/8/10</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">Processor</p>
                  <p className="font-medium">Core i5 3.3GHZ</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-xxlight-gray">GPU</p>
                  <p className="font-medium">Intel HB 4000</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
