import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'app/(app)/_components/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  args: {
    text: 'Heading',
    color: 'white',
    decorate: {
      color: 'secondary',
      orientation: 'vertical'
    },
    size: 'xxxlarge'
  }
}
