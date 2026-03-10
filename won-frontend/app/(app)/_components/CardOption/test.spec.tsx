import { render, screen } from '@testing-library/react'

import { CardOption } from '.'

describe('<CardOption />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardOption />)

    expect(
      screen.getByRole('heading', { name: /CardOption/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
