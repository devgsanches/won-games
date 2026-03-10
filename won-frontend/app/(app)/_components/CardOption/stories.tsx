import { Meta, StoryObj } from '@storybook/react'
import { CardOption } from '.'

const mockCards = [
  { id: '1', flag: 'master-card', cardNumber: '**** **** **** 4325' },
  { id: '2', flag: 'visa', cardNumber: '**** **** **** 1234' }
]

export default {
  title: 'app/(app)/_components/CardOption',
  component: CardOption,
  tags: ['autodocs'],
  args: {
    cards: mockCards
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof CardOption>

export const Default: StoryObj<typeof CardOption> = {
  decorators: [
    (Story) => (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="max-w-100 w-full h-118 bg-white p-4">
          <Story />
        </div>
      </div>
    )
  ]
}

export const SingleCard: StoryObj<typeof CardOption> = {
  args: {
    cards: [{ id: '1', flag: 'master-card', cardNumber: '**** **** **** 4325' }]
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="max-w-100 w-full h-118 bg-white p-4">
          <Story />
        </div>
      </div>
    )
  ]
}
