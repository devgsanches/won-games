import { Meta, StoryObj } from '@storybook/react'

import { MobileNavbar } from '.'

export default {
  title: 'app/(app)/_components/mobile-navbar',
  component: MobileNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Dark: StoryObj = {}
