import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '.'

export default {
  title: 'app/(app)/_components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
  // decorators: [
  //   (Story) => (
  //     <div className="font-family-inter">
  //       {/* Tudo aqui dentro usa Inter, não Poppins */}
  //       <Story />
  //     </div>
  //   )
  // ]
} as Meta
export const Default: StoryObj = {
  args: {
    user: 'Guilherme'
  }
}
