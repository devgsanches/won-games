import { render, screen } from '@testing-library/react'

import { Navbar } from '.'
import {
  mockDesktopViewport,
  mockMobileViewport
} from '@/test/responsive-helpers-for-tests'
import userEvent from '@testing-library/user-event'

describe('<Navbar />', () => {
  // Verify if exists two navbars

  it('should render two navbars', () => {
    render(<Navbar />)

    const navbars = screen.getAllByRole('navigation')

    expect(navbars).toHaveLength(2)
  })

  // Verifica navbar com usuário logado
  it('should render navbar with user logged in', () => {
    render(<Navbar user="Guilherme" />)

    const navbars = screen.getAllByRole('navigation')

    expect(navbars).toHaveLength(2)
  })

  // Verifica navbar mobile sem usuário logado
  it('should render navbar mobile without user logged in', async () => {
    mockMobileViewport()

    const user = userEvent.setup()
    render(<Navbar />)

    // Abre o Sheet
    const menuButton = screen.getByLabelText('Open menu')
    await user.click(menuButton)

    // Aguarda o conteúdo aparecer no DOM
    expect(screen.getByText('Início')).toBeInTheDocument()
  })

  // Desktop
  it('should render the desktop version - navbar', () => {
    mockDesktopViewport()
    render(<Navbar />)

    const navbars = screen.getAllByRole('navigation')
    const desktopNav = navbars.find(
      (nav) =>
        nav.className.includes('hidden') && nav.className.includes('md:flex')
    )
    expect(desktopNav).toBeInTheDocument()

    // Verifica se os links desktop estão presentes
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore/i })).toBeInTheDocument()
  })

  // Mobile
  it('should render the mobile version - navbar', () => {
    mockMobileViewport()
    render(<Navbar />)

    const navbars = screen.getAllByRole('navigation')
    const mobileNav = navbars.find((nav) => nav.className.includes('md:hidden'))
    expect(mobileNav).toBeInTheDocument()

    // Verifica se o botão do menu está presente
    const menuButton = screen.getByLabelText('Open menu')
    expect(menuButton).toBeInTheDocument()
  })
})
