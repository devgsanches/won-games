import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import { Heart, ShoppingCart as ShoppingCartIcon } from 'lucide-react'

export default {
  title: 'app/(app)/_components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    }
  }
} as Meta
export const Default: StoryObj = {
  args: {
    size: 'lg',
    children: 'Button',
    variant: 'default'
  }
}

export const withIcon: StoryObj = {
  args: {
    size: 'lg',
    children: 'Finalizar pedido',
    variant: 'default',
    icon: <ShoppingCartIcon size={28} />
  }
}

export const asLink: StoryObj = {
  args: {
    variant: 'link',
    children: 'Crie sua conta'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <Story />
      </div>
    )
  ]
}

export const asWishList: StoryObj = {
  args: {
    variant: 'wishList',
    children: 'Lista de desejos',
    icon: <Heart strokeWidth={2} />
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <Story />
      </div>
    )
  ]
}
