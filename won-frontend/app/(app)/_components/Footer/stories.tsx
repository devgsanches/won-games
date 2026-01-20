import { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'app/(app)/_components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj = {}
