import { Wishlist, type WishlistProps } from '../../_templates/Wishlist'
import games from '../../_components/GameCardSlider/mock'

const props: WishlistProps = {
  games
}

export default function WishlistPage() {
  return <Wishlist {...props} />
}
