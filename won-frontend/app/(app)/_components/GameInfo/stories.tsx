import { Meta, StoryObj } from '@storybook/react'
import { GameInfo } from '.'

export default {
  title: 'app/(app)/_components/GameInfo',
  component: GameInfo,
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
      <div className="h-screen flex items-center justify-center">
        <div className="w-91.5  md:w-full md:px-20">
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    title: 'Borderlands 3',
    description: 'Borderlands 3 is a great game',
    price: '199.99'
  }
}
