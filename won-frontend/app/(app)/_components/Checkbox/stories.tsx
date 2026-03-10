import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '.'

export default {
  title: 'app/(app)/_components/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <Story />
      </div>
    )
  ],
  args: {
    children: 'De R$0,00 a R$ 50,00',
    labelId: 'check'
  }
}
