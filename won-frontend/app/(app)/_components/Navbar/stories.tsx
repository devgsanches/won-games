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
      <div className="md:p-10 p-6 md:px-20">
        <Story />
      </div>
    )
  ],
  args: {
    user: 'Guilherme'
  }
}
