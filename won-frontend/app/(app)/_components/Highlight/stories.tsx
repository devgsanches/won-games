import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from '.'

export default {
  title: 'app/(app)/_components/Highlight',
  component: Highlight,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    textDirection: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <Story />
      </div>
    )
  ],
  args: {
    textDirection: 'right',
    title: 'School has never been this dangerous',
    subtitle: 'Master the hallways, face the bullies and make your name',
    textButton: 'Buy now'
  }
} as Meta

export const Default: StoryObj = {}
