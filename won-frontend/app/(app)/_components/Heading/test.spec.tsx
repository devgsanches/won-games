import { render, screen } from '@testing-library/react'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render the heading with vertical secondary color decoration and white text color', () => {
    const { container } = render(
      <Heading
        text="Heading"
        color="white"
        decorate={{ color: 'secondary', orientation: 'vertical' }}
        size="large"
      />
    )

    const structure = container.firstChild
    const decorativeBar = structure?.firstChild
    const heading = screen.getByRole('heading')

    expect(structure).toHaveClass('flex items-center gap-2.75')

    expect(decorativeBar).toHaveClass('w-1.75 h-7.75 bg-secondary')

    expect(heading).toHaveTextContent('Heading')
    expect(heading).toHaveClass('text-white text-large font-semibold')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the heading with horizontal primary color decoration and white text color', () => {
    const { container } = render(
      <Heading
        text="Heading"
        color="white"
        decorate={{ color: 'primary', orientation: 'horizontal' }}
        size="large"
      />
    )

    const structure = container.firstChild
    const heading = screen.getByRole('heading')
    const decorativeBar = container.querySelector('.bg-primary')

    // const decorativeBar = heading?.firstChild

    expect(structure).toHaveClass('flex flex-col gap-2.75')

    expect(heading).toHaveTextContent('Heading')
    expect(heading).toHaveClass('text-white text-large font-semibold')

    expect(decorativeBar).toHaveClass('bg-primary w-12.25 h-1.5')

    expect(container.firstChild).toMatchSnapshot()
  })
})
