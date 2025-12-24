import path from 'path'
import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

const root = path.resolve(dirname, './')

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      '@': root
    }
  },
  plugins: [
    // Plugin para corrigir o erro do Next.js no Storybook
    {
      name: 'fix-next-router-error',
      resolveId(id) {
        if (id === 'next/dist/client/components/is-next-router-error') {
          return 'next/dist/client/components/is-next-router-error.js'
        }
      }
    }
  ],
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      include: ['app/**/_components/**/*.{ts,tsx}'],
      exclude: ['app/**/components/ui/**/*.{ts,tsx,js,jsx}']
    },
    projects: [
      {
        name: 'unit',
        test: {
          globals: true,
          include: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
          exclude: [
            '**/*.stories.{ts,tsx}',
            '**/node_modules/**',
            '**/dist/**',
            '**/.next/**',
            '**/coverage/**'
          ]
        }
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          environment: 'happy-dom',
          setupFiles: ['.storybook/vitest.setup.ts'],
          exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.next/**',
            '**/coverage/**'
          ]
        }
      }
    ]
  }
})
