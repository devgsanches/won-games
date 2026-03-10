import { render, screen } from '@testing-library/react'

import { Section } from '.'

describe('<Section />', () => {
  it('should render the heading', () => {
    const { container } = render(<Section />)

    expect(
      screen.getByRole('heading', { name: /Section/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
