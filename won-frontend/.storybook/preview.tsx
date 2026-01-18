import type { Preview } from '@storybook/nextjs-vite'
import { Poppins } from 'next/font/google'
import '../app/globals.css'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'todo'
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/'
      }
    }
  },
  decorators: [
    (Story) => (
      <div className={`min-h-screen bg-dark-storybook w-full`}>
        <Story />
      </div>
    )
  ]
}

export default preview
