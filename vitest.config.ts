import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      include: ['app/**/_components/**/*.{ts,tsx}'],
      exclude: ['app/**/components/ui/**/*.{ts,tsx,js,jsx}']
    },
    include: ['**/*.{test,spec}.{ts,tsx,js,jsx}']
  }
})
