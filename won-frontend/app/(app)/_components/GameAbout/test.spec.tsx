import { render, screen } from '@testing-library/react'

import { GameAbout } from '.'

describe('<GameAbout />', () => {
  it('should render the heading', () => {
    const { container } = render(<GameAbout />)

    expect(
      screen.getByRole('heading', { name: /GameAbout/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
