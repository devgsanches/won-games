import { render } from '@testing-library/react'

import { MobileNavbar } from '.'

describe('<MobileNavbar />', () => {
  it('should render the mobile navbar', () => {
    // render the component
    const { container } = render(<MobileNavbar />)

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
