import { Meta, StoryObj } from '@storybook/react'
import { CartDropdown } from '.'
import mock from '../../_templates/Cart/mock'

export default {
  title: 'app/(app)/_components/CartDropdown',
  component: CartDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    items: [...mock]
  },
  decorators: [
    (Story) => (
      <div className="w-full h-screen">
        <div className="max-w-grid-container mx-auto">
          <div className="flex justify-end p-6">
            <Story />
          </div>
        </div>
      </div>
    )
  ]
}

export const Empty: StoryObj = {
  args: {
    items: [],
    
  },
  decorators: [
    (Story) => (
      <div className="w-full h-screen">
        <div className="max-w-grid-container mx-auto">
          <div className="flex justify-end p-6">
            <Story />
          </div>
        </div>
      </div>
    )
  ]
}


