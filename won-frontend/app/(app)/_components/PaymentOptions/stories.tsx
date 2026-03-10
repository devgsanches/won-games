import { Meta, StoryObj } from '@storybook/react'
import { PaymentOptions } from '.'

export default {
  title: 'app/(app)/_components/PaymentOptions',
  component: PaymentOptions,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'main-bg' }
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="md:max-w-100 max-w-11/12 w-full h-118 bg-white">
          <Story />
        </div>
      </div>
    )
  ]
}
