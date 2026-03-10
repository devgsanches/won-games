import { render, screen } from '@testing-library/react'

import { Explore } from '.'

describe('<Explore />', () => {
  it('should render the heading', () => {
    const { container } = render(<Explore />)

    expect(
      screen.getByRole('heading', { name: /Explore/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
