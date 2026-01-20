import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '.'

export default {
  title: 'app/(app)/_components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="p-10 px-20">
        <Story />
      </div>
    )
  ],
  args: {
    user: 'Guilherme'
  }
}
