import { Meta, StoryObj } from '@storybook/react'
import { ProfileMenu } from '.'

export default {
  title: 'app/(app)/_components/ProfileMenu',
  component: ProfileMenu,
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
      <div className="h-screen w-full flex items-center justify-center">
        <div className="max-w-grid-container w-full px-6">
          <Story />
        </div>
      </div>
    )
  ]
}
