import { Meta, StoryObj } from '@storybook/react'
import { GameCard } from '.'

export default {
  title: 'app/(app)/_components/GameCard',
  component: GameCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="bg-xlight-gray h-screen flex justify-center items-center">
        <Story />
      </div>
    )
  ],
  args: {
   name: 'Resident Evil 3',
   imgUrl: '/cs.jpg',
   developer: 'Capcom',
   price: 219,
  },
  argTypes: {
    promotion: {
      table: {
        disable: true
      }
    }
  }
}

export const Promotional: StoryObj = {
  decorators: [
    (Story) => (
      <div className="bg-xlight-gray h-screen flex justify-center items-center">
        <Story />
      </div>
    )
  ],
  args: {
    name: 'Resident Evil 3',
    imgUrl: '/resident-evil.png',
    developer: 'Capcom',
    price: 219,
    promotion: {
      oldPrice: 'R$ 245,00',
      discountPercentage: 10
    },
    size: 'small',
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
}

export const Free: StoryObj = {
  decorators: [
    (Story) => (
      <div className="bg-xlight-gray h-screen flex justify-center items-center">
        <Story />
      </div>
    )
  ],
  args: {
    name: 'Resident Evil 3',
    imgUrl: '/resident-evil.png',
    developer: 'Capcom',
    size: 'small',
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
}
