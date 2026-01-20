import { render, screen } from '@testing-library/react'

import { GameCardSlider } from '.'

describe('<Slider />', () => {
  const items = [
    {
      name: 'Resident Evil 3',
      imgUrl: '/resident-evil.png',
      developer: 'Capcom',
      price: 219,
      promotion: {
        oldPrice: 'R$ 245,00',
        discountPercentage: 10
      },
      size: 'small'
    },
    {
      name: 'The Witcher 3',
      imgUrl: '/the-witcher.png',
      developer: 'CD Projekt Red',
      price: 299,
      promotion: null,
      size: 'small'
    }
  ]
  it('should render the heading', () => {
    const { container } = render(<GameCardSlider items={items} />)
  })
})
