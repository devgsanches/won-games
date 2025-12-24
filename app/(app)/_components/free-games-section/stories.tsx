import { Meta, StoryObj } from '@storybook/react'
import { Props, FreeGamesSection } from '.'

export default {
  title: 'app/(app)/_components/free-games-section',
  component: FreeGamesSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<Props>

export const Default: StoryObj<Props> = {}
