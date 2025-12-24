import { Meta, StoryObj } from '@storybook/react'
import { Props, PlayNowSection } from '.'

export default {
  title: 'app/(app)/_components/play-now-section',
  component: PlayNowSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<Props>

export const Default: StoryObj<Props> = {}
