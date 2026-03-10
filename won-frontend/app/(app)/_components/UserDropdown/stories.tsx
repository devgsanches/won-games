import { Meta, StoryObj } from '@storybook/react'
import { UserDropdown } from '.'

export default {
  title: 'app/(app)/_components/UserDropdown',
  component: UserDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  args: {
    user: 'Sanchez'
  },
  argTypes: {
    user: {
      control: {
        type: 'text'
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="w-full h-screen flex justify-end">
        <div className="px-12 py-6">
          <Story />
        </div>
      </div>
    )
  ]
}
