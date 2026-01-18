import { render, screen } from '@testing-library/react'

import { Ribbon } from '.'

describe('<Ribbon />', () => {
  it('should render the Ribbon with large variant', () => {
    const { debug, container } = render(<Ribbon>New Release</Ribbon>)

    // debug(container)

    const ribbon = container.firstChild

    expect(screen.getByText('New Release')).toBeInTheDocument()

    expect(ribbon).toHaveClass('h-9.5 text-sm font-semibold bg-ribbon-primary')

    expect(container.firstChild).toMatchSnapshot()
  })
})
