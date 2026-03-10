import { render, screen } from '@testing-library/react'

import { RadioGroup } from '.'

describe('<RadioGroup />', () => {
  it('should render the heading', () => {
    const { container } = render(<RadioGroup />)

    expect(
      screen.getByRole('heading', { name: /RadioGroup/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
