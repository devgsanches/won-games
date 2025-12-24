import { Meta, StoryObj } from '@storybook/react'
import { Props, PromotionsSection } from '.'

export default {
  title: 'app/(app)/_components/promotions-section',
  component: PromotionsSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<Props>

export const Default: StoryObj<Props> = {}
