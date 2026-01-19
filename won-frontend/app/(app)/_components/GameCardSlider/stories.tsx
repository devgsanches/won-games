import { Meta, StoryObj } from '@storybook/react'
import { GameCardSlider } from '.'

export default {
  title: 'app/(app)/_components/GameCardSlider',
  component: GameCardSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="bg-main-bg h-screen overflow-hidden">
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
         <Story />
        </div>
      </div>
    )
  ],
  args: {
    items: [
      {
        name: 'Resident Evil 3',
        imgUrl: '/resident-evil.png',
        developer: 'Capcom',
        price: 219,
        size: 'small'
      },
      {
        name: 'The Witcher 3',
        imgUrl: '/resident-evil.png',
        developer: 'CD Projekt Red',
        price: 219,
        size: 'small'
      },
      {
        name: 'The Witcher 3',
        imgUrl: '/resident-evil.png',
        developer: 'CD Projekt Red',
        price: 219,
        size: 'small'
      },
      {
        name: 'The Witcher 3',
        imgUrl: '/resident-evil.png',
        developer: 'CD Projekt Red',
        price: 219,
        size: 'small'
      },
      {
        name: 'The Witcher 3',
        imgUrl: '/resident-evil.png',
        developer: 'CD Projekt Red',
        price: 219,
        size: 'small'
      }
    ]
  }
}
