import { Meta, StoryObj } from '@storybook/react'
import { ExploreSidebar } from '.'

export default {
  title: 'app/(app)/_components/ExploreSidebar',
  component: ExploreSidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="w-full">
        <div className="p-6">
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    defaultValues: {
      price: ['under-50', 'free', 'discount'],
      sortBy: ['high-to-low'],
      platforms: ['windows'],
      categories: ['action', 'adventure', 'terror']
    }
  }
}
