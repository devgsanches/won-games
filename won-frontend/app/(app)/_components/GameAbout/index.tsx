'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Heading } from '../Heading'

export interface GameAboutProps {
  shortDescription: string
  description: string
}

export function GameAbout({ shortDescription, description }: GameAboutProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="md:bg-white md:p-12">
      <div>
        <div className="flex flex-col md:flex-row gap-6.75">
          {isMobile && (
            <Heading
              text="About the game"
              color={isMobile ? 'white' : 'black'}
              size="xxlarge"
              decorate={{ color: 'secondary', orientation: 'vertical' }}
            />
          )}
          <div className="bg-center bg-cover bg-[url(/cyberpunk-game.jpg)] w-full md:w-89 h-42.75" />
          <div className="flex flex-col gap-6">
            {!isMobile && (
              <Heading
                text="About the game"
                color="black"
                size={isMobile ? 'xlarge' : 'xxxlarge'}
                decorate={{ color: 'secondary', orientation: 'vertical' }}
              />
            )}
            <p className="md:text-xl/7 md:text-black text-white font-light max-w-196">
              {shortDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-13.25 ">
          <Heading
            text="Learn more"
            color={isMobile ? 'white' : 'black'}
            size={isMobile ? 'xxlarge' : 'xlarge'}
            decorate={{ color: 'secondary', orientation: 'vertical' }}
          />
          <div
            className="md:text-xl font-light md:text-black text-white max-w-grid-container"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
    </div>
  )
}
