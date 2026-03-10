import { Meta, StoryObj } from '@storybook/react'
import { CartList } from '.'

export default {
  title: 'app/(app)/_components/CartList',
  component: CartList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  args: {
    items: [
      {
        imgUrl: '/cyberpunk-cover.jpg',
        name: 'Cyberpunk 2077',
        price: 215.0
      },
      {
        imgUrl: '/cyberpunk-cover.jpg',
        name: 'Cyberpunk 2077',
        price: 215.0
      },
      {
        imgUrl: '/cyberpunk-cover.jpg',
        name: 'Cyberpunk 2077',
        price: 215.0
      },
      {
        imgUrl: '/cyberpunk-cover.jpg',
        name: 'Cyberpunk 2077',
        price: 215.0
      },
      {
        imgUrl: '/cyberpunk-cover.jpg',
        name: 'Cyberpunk 2077',
        price: 215.0
      }
    ],
    total: 415.0
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-full flex justify-center items-center">
        <div>
          <Story />
        </div>
      </div>
    )
  ]
}
