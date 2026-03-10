import { render, screen } from '@testing-library/react'

import { WritingText } from '.'

describe('<WritingText />', () => {
  it('should render the heading', () => {
    const { container } = render(<WritingText />)

    expect(
      screen.getByRole('heading', { name: /WritingText/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
