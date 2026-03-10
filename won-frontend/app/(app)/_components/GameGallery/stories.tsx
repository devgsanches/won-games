import { Meta, StoryObj } from '@storybook/react'
import { GameGallery, GalleryImageProps } from '.'

export default {
  title: 'app/(app)/_components/GameGallery',
  component: GameGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'main-bg' }
  }
} as Meta

const mockItems: GalleryImageProps[] = [
  {
    src: '/bully_cover.jpg',
    label: 'Gallery Image 1'
  },
  {
    src: '/counter-strike-2.jpg',
    label: 'Gallery Image 2'
  },
  {
    src: '/bully_banner.jpg',
    label: 'Gallery Image 3'
  },
  {
    src: '/counter-strike.jpg',
    label: 'Gallery Image 4'
  },
  {
    src: '/cs.jpg',
    label: 'Gallery Image 5'
  },
  {
    src: '/resident-evil.png',
    label: 'Gallery Image 6'
  }
]

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="max-w-5xl mx-auto py-10">
        <Story />
      </div>
    )
  ],
  args: {
    items: mockItems
  }
}
