import { Meta, StoryObj } from '@storybook/react'
import { RadioGroupTemplate } from '.'

export default {
  title: 'app/(app)/_components/Form/RadioGroup',
  component: RadioGroupTemplate,
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
    radios: [
      {
        id: '1',
        value: 'desc',
        label: 'Maior preço'
      },
      {
        id: '2',
        value: 'asc',
        label: 'Menor preço'
      }
    ]
  }
}
