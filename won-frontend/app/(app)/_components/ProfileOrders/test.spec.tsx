import { render, screen } from '@testing-library/react'

import { ProfileOrders } from '.'

describe('<ProfileOrders />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileOrders />)

    expect(
      screen.getByRole('heading', { name: /ProfileOrders/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
