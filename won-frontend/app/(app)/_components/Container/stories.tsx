import { Meta, StoryObj } from '@storybook/react'
import { Container } from '.'

export default {
  title: 'app/(app)/_components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  args: {
    children: <h1>Container</h1>
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <Story />
      </div>
    )
  ]
}
