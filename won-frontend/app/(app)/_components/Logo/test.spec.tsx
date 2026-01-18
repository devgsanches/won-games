import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the color black by default', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toHaveClass('text-black')
  })

  it('should render a logo with the color white', () => {
    const { container } = render(<Logo color="white" />)

    expect(container.firstChild).toHaveClass('text-white')
  })

  it('should render the xsmall logo size by default', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toHaveClass('w-27.5 h-8.25')
  })

  it('should render the mobile logo size', () => {
    const { container } = render(<Logo mobile />)

    const logoSvg = screen.getByTestId('logo-mobile')

    expect(logoSvg).toBeInTheDocument()
    expect(logoSvg).toHaveAttribute('alt', 'Won Games')
    expect(container.firstChild).toHaveAttribute('data-testid', 'logo-mobile')
  })
})
