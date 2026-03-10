import { render, screen, fireEvent } from '@testing-library/react'

import { GameGallery, GalleryImageProps } from '.'

const mockItems: GalleryImageProps[] = [
  { src: '/image1.jpg', label: 'Gallery Image 1' },
  { src: '/image2.jpg', label: 'Gallery Image 2' },
  { src: '/image3.jpg', label: 'Gallery Image 3' },
  { src: '/image4.jpg', label: 'Gallery Image 4' }
]

describe('<GameGallery />', () => {
  it('should render the gallery thumbnails', () => {
    render(<GameGallery items={mockItems} />)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toBeInTheDocument()
  })

  it('should open the modal when clicking on a thumbnail', () => {
    render(<GameGallery items={mockItems} />)

    const firstThumb = screen.getByRole('button', {
      name: /thumb - gallery image 1/i
    })
    fireEvent.click(firstThumb)

    // Modal should be visible (opacity-100)
    const modal = screen.getByRole('button', { name: /close modal/i })
    expect(modal).toBeInTheDocument()
  })

  it('should close the modal when clicking the close button', () => {
    render(<GameGallery items={mockItems} />)

    // Open modal
    const firstThumb = screen.getByRole('button', {
      name: /thumb - gallery image 1/i
    })
    fireEvent.click(firstThumb)

    // Close modal
    const closeButton = screen.getByRole('button', { name: /close modal/i })
    fireEvent.click(closeButton)

    // Modal should be hidden (pointer-events-none)
    const modalOverlay = closeButton.parentElement
    expect(modalOverlay?.parentElement).toHaveClass('pointer-events-none')
  })

  it('should have navigation arrows', () => {
    render(<GameGallery items={mockItems} />)

    const prevButtons = screen.getAllByRole('button', {
      name: /previous image/i
    })
    const nextButtons = screen.getAllByRole('button', { name: /next image/i })

    expect(prevButtons.length).toBeGreaterThan(0)
    expect(nextButtons.length).toBeGreaterThan(0)
  })
})
