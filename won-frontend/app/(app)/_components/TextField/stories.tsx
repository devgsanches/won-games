import { Meta, StoryObj } from '@storybook/react'
import { TextField } from '.'
import { LockKeyhole } from 'lucide-react'

export default {
  title: 'app/(app)/_components/Form/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta
export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <div className="w-68.25">
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    label: 'Senha atual',
    placeholder: 'Sua senha atual',
    icon: <LockKeyhole strokeWidth={2} />,
    type: 'password'
  },
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    }
  }
}

export const Error: StoryObj = {
  decorators: [
    (Story) => (
      <div className="h-screen flex items-center justify-center">
        <div className="w-95.25">
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    label: 'Senha atual',
    placeholder: 'Sua senha atual',
    icon: <LockKeyhole strokeWidth={2} />,
    type: 'password',
    error: true,
    errorMessage: 'Ops.. something is wrong'
  }
}
