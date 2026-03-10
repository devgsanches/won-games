import { render, screen } from '@testing-library/react'

import { ProfileChangePasswordForm } from '.'

describe('<ProfileChangePasswordForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileChangePasswordForm />)

    expect(
      screen.getByRole('heading', { name: /ProfileChangePasswordForm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
