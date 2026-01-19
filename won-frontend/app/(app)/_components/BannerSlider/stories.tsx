import { Meta, StoryObj } from '@storybook/react'
import { BannerSlider } from '.'

export default {
  title: 'app/(app)/_components/BannerSlider',
  component: BannerSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="bg-main-bg h-screen overflow-hidden">


        <Story />


      </div>
    )
  ],
  args: {
    items: [
      {
        imageUrl: '/bully_cover.jpg',
        title: 'Salve a cidade',
        subtitle: 'Jogue a nova temporada de',
        gameName: 'O Universo do Homem-Aranha'

      },
      {
        imageUrl: '/bully_cover.jpg',
        title: 'Salve a cidade',
        subtitle: 'Jogue a nova temporada de',
        gameName: 'O Universo do Homem-Aranha'

      },
      {
        name: 'The Witcher 3',
        imageUrl: '/bully_cover.jpg',
        title: 'Salve a cidade',
        subtitle: 'Jogue a nova temporada de',
        gameName: 'O Universo do Homem-Aranha'

      },
      {
        name: 'The Witcher 3',
        imageUrl: '/bully_cover.jpg',
        title: 'Salve a cidade',
        subtitle: 'Jogue a nova temporada de',
        gameName: 'O Universo do Homem-Aranha'
      },
      {
        name: 'The Witcher 3',
        imageUrl: '/bully_cover.jpg',
        title: 'Salve a cidade',
        subtitle: 'Jogue a nova temporada de',
        gameName: 'O Universo do Homem-Aranha'
      },
      {
        name: 'The Witcher 3',
        imageUrl: '/bully_cover.jpg',
        title: 'Salve a cidade',
        subtitle: 'Jogue a nova temporada de',
        gameName: 'O Universo do Homem-Aranha'
      }
    ]
  }
}
