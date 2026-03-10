import { Meta, StoryObj } from '@storybook/react'
import { GameItem } from '.'

export default {
  title: 'app/(app)/_components/GameItem',
  component: GameItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'main-bg' }
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="md:w-206 w-full bg-white">
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    imgUrl: '/cyberpunk-cover.jpg',
    name: 'Cyberpunk 2077',
    price: 215.0
  }
}
