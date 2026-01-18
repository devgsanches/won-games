import { vi } from 'vitest'

// Tailwind breakpoints padrão:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

const createMatchMediaMock = (
  shouldMatchMinWidth: (width: number) => boolean
) => {
  return vi.fn().mockImplementation((query: string) => {
    // Para queries com min-width
    if (query.includes('min-width')) {
      const match = query.match(/min-width:\s*(\d+)px/)
      if (match) {
        const width = parseInt(match[1])
        return {
          matches: shouldMatchMinWidth(width),
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn()
        }
      }
    }

    // Para queries com max-width
    if (query.includes('max-width')) {
      const match = query.match(/max-width:\s*(\d+)px/)
      if (match) {
        const width = parseInt(match[1])
        // max-width funciona de forma inversa: max-width: 767px significa <= 767px
        // Para mobile, max-width queries devem retornar true se width < 768
        return {
          matches: width < 768,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn()
        }
      }
    }

    // Fallback
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }
  })
}

export const mockMobileViewport = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: createMatchMediaMock((width) => {
      // Mobile: não atende nenhum min-width (tudo retorna false)
      return false
    })
  })
}

export const mockTabletViewport = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: createMatchMediaMock((width) => {
      // Tablet: atende min-width >= 768px mas < 1024px
      return width >= 768 && width < 1024
    })
  })
}

export const mockDesktopViewport = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: createMatchMediaMock((width) => {
      // Desktop: atende todos os min-width >= 768px
      return width >= 768
    })
  })
}
