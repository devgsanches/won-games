import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from '.'

export default {
  title: 'app/(app)/_components/Highlight',
  component: Highlight,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    textDirection: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <Story />
      </div>
    )
  ],
  args: {
    textDirection: 'right',
    title: 'A escola nunca foi tão perigosa',
    subtitle: 'Domine os corredores, enfrente os valentões e faça seu nome',
    textButton: 'Comprar agora'
  }
} as Meta

export const Default: StoryObj = {}
