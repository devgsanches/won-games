import { Meta, StoryObj } from '@storybook/react'
import { Ribbon } from '.'

export default {
  title: 'app/(app)/_components/Ribbon',
  component: Ribbon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="w-64 h-52 relative bg-main-bg">
        <Story />
      </div>
    )
  ],
  args: {
    color: 'primary',
    size: 'large',
    children: 'New Release'
  }
}
