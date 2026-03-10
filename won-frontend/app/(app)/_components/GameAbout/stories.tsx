import { Meta, StoryObj } from '@storybook/react'
import { GameAbout } from '.'

export default {
  title: 'app/(app)/_components/GameAbout',
  component: GameAbout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="h-screen w-full">
        <div className="p-6">
          <Story />
        </div>
      </div>
    )
  ]
}
