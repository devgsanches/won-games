import { Meta, StoryObj } from '@storybook/react'
import { GameDetails } from '.'

export default {
  title: 'app/(app)/_components/GameDetails',
  component: GameDetails,
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
      <div className="h-screen w-full">
        <div className="md:p-10 p-6">
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    platforms: ['windows', 'linux', 'macos']
  }
}
