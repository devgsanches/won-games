import { Meta, StoryObj } from '@storybook/react'
import { Props, MorePopularSection } from '.'

export default {
  title: 'app/(app)/_components/more-popular-section',
  component: MorePopularSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<Props>

export const Default: StoryObj<Props> = {}
