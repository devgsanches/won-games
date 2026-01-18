import { Meta, StoryObj } from '@storybook/react'
import { Banner } from '.'

export default {
  title: 'app/(app)/_components/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    imageUrl:
      'https://ibitelecom.com.br/wp-content/uploads/2023/11/image-8.jpeg',
    title: 'Salve a cidade',
    subtitle: 'Jogue a nova temporada de',
    gameName: 'O Universo do Homem-Aranha'
  },
  decorators: [
    (Story) => (
      <div className="bg-main-bg h-screen">
        <Story />
      </div>
    )
  ]
}
