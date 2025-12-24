import { Meta, StoryObj } from '@storybook/react'
import { ReleasesSection, Props } from '.'

export default {
  title: 'app/(app)/_components/releases-section',
  component: ReleasesSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<Props>

export const Default: StoryObj<Props> = {}
