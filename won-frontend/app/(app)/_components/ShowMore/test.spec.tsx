import { render, screen } from '@testing-library/react'

import { ShowMore } from '.'

describe('<ShowMore />', () => {
  it('should render the heading', () => {
    const { container } = render(<ShowMore />)

    expect(screen.getByRole('heading', { name: /ShowMore/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})