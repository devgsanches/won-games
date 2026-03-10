import { Meta, StoryObj } from '@storybook/react'
import { FormSignIn } from '.'

export default {
  title: 'app/(app)/_components/FormSignIn',
  component: FormSignIn,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <div className="w-91.5">
          {' '}
          <Story />
        </div>
      </div>
    )
  ]
}
