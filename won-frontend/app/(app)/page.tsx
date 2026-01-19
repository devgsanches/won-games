import { GameCardSlider } from './_components/GameCardSlider'
import { Navbar } from './_components/Navbar'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full min-h-screen">
      <Navbar />
      <div className="w-full">
      <GameCardSlider items={[
          {
            imgUrl: '/bully_cover.jpg',
            name: 'The Witcher 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            price: 219,
            size: 'small',
          }
        ]} />
      </div>
    </div>
  )
}

export default HomePage
