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
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#fafafa' },
        dark: { name: 'Dark', value: '#333333' },
        'main-bg': { name: 'Main bg', value: '#06092b' }
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
  initialGlobals: {
    backgrounds: { value: 'light' }
  },
  decorators: [
    (Story) => (
      <div className={`min-h-screen w-full`}>
        <Story />
      </div>
    )
  ]
}

export default preview
