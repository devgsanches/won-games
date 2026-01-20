import { BannerSlider } from './_components/BannerSlider'
import { GameCardSlider } from './_components/GameCardSlider'
import { Navbar } from './_components/Navbar'

const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="md:mt-4 mt-2">
        <BannerSlider
          items={[
            {
              imageUrl:
                'https://ibitelecom.com.br/wp-content/uploads/2023/11/image-8.jpeg',
              title: 'Salve a cidade',
              subtitle: 'Jogue a nova temporada de',
              gameName: 'O Universo do Homem-Aranha'
            },
            {
              imageUrl:
                'https://ibitelecom.com.br/wp-content/uploads/2023/11/image-8.jpeg',
              title: 'Salve a cidade',
              subtitle: 'Jogue a nova temporada de',
              gameName: 'O Universo do Homem-Aranha'
            },
            {
              imageUrl:
                'https://ibitelecom.com.br/wp-content/uploads/2023/11/image-8.jpeg',
              title: 'Salve a cidade',
              subtitle: 'Jogue a nova temporada de',
              gameName: 'O Universo do Homem-Aranha'
            }
          ]}
        />
      </div>
      <div className="w-full pl-2 md:mt-10 mt-20 pb-30">
        <GameCardSlider
          items={[
            {
              imgUrl: '/bully_cover.jpg',
              name: 'The Witcher 3',
              developer: 'Capcom',
              price: 199,
              size: 'small'
            },
            {
              imgUrl: '/bully_cover.jpg',
              name: 'Resident Evil 3',
              developer: 'Capcom',
              price: 199,
              size: 'small'
            },
            {
              imgUrl: '/bully_cover.jpg',
              name: 'Resident Evil 3',
              developer: 'Capcom',
              price: 199,
              size: 'small'
            },
            {
              imgUrl: '/bully_cover.jpg',
              name: 'Resident Evil 3',
              developer: 'Capcom',
              price: 199,
              size: 'small'
            },
            {
              imgUrl: '/bully_cover.jpg',
              name: 'Resident Evil 3',
              developer: 'Capcom',
              price: 199,
              size: 'small'
            },
            {
              imgUrl: '/bully_cover.jpg',
              name: 'Resident Evil 3',
              developer: 'Capcom',
              price: 199,
              size: 'small'
            },
            {
              imgUrl: '/bully_cover.jpg',
              name: 'Resident Evil 3',
              developer: 'Capcom',
              size: 'small'
            },
            {
              imgUrl: '/bully_cover.jpg',
              name: 'Resident Evil 3',
              developer: 'Capcom',
              price: 199,
              size: 'small'
            }
          ]}
        />
      </div>
    </div>
  )
}

export default HomePage
