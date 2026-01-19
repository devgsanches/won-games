import { GameCardSlider } from './_components/GameCardSlider'
import { Navbar } from './_components/Navbar'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen">
    <div className="w-full">
      <Navbar />
    </div>
      <div className="w-full pl-2">
      <GameCardSlider items={[
          {
            imgUrl: '/bully_cover.jpg',
            name: 'The Witcher 3',
            developer: 'Capcom',

            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',

            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            size: 'small',
          },
          {
            imgUrl: '/bully_cover.jpg',
            name: 'Resident Evil 3',
            developer: 'Capcom',
            size: 'small' ,
          }
        ]} />
      </div>
    </div>
  )
}

export default HomePage
