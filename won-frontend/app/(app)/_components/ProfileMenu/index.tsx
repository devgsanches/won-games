'use client'

import { CircleUser, CreditCard, KeyRound, List, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Heading } from '../Heading'
import { ProfileForm } from '../ProfileForm'
import { CardList } from '../CardList'
import type { Card } from '../CardOption'
import { ProfileOrders } from '../ProfileOrders'
import type { GameCardProps } from '../GameCard'
import { ProfileChangePasswordForm } from '../ProfileChangePasswordForm'
import { useRouter } from 'next/navigation'

export function ProfileMenu({ activeLink }: { activeLink: string }) {
  const router = useRouter()

  const cards: Card[] = [
    {
      id: '1',
      flag: '/flags/master-card.png',
      cardNumber: '**** **** **** 4325'
    },
    { id: '2', flag: '/flags/visa.png', cardNumber: '**** **** **** 1234' }
  ]

  const games: GameCardProps[] = [
    {
      id: '1',
      imgUrl: '/bully_cover.jpg',
      name: 'Bully: Scholarship Edition',
      price: 100,
      cardNumber: 1,
      purchaseDate: '2026-01-01',
      flag: 'visa',
      slug: 'bully-scholarship-edition',
      developer: 'Rockstar Games'
    },
    {
      id: '2',
      imgUrl: '/counter-strike.png',
      name: 'Counter Strike: Global Offensive',
      price: 200,
      cardNumber: 2,
      purchaseDate: '2026-01-02',
      flag: 'master-card',
      slug: 'counter-strike-global-offensive',
      developer: 'Valve'
    }
  ]

  const options = [
    {
      icon: <CircleUser size={24} />,
      label: 'My profile',
      href: '/profile/me'
    },
    {
      icon: <CreditCard size={24} />,
      label: 'My cards',
      href: '/profile/cards'
    },
    {
      icon: <List size={24} />,
      label: 'My orders',
      href: '/profile/orders'
    },
    {
      icon: <KeyRound size={24} />,
      label: 'Change password',
      href: '/profile/change-password'
    },
    {
      icon: <LogOut size={24} />,
      label: 'Logout',
      href: '/profile/logout'
    }
  ]

  const handleLogout = () => {
    router.push('/auth/sign-in')
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-20 w-full h-full">
      <nav className="bg-white text-black md:w-80.5 w-full  ">
        <div className="hidden md:block">
          {options.map((o) =>
            o.href === '/profile/logout' ? (
              <button
                onClick={handleLogout}
                className="w-full cursor-pointer flex items-center gap-3 border-b border-input p-6 hover:bg-primary hover:text-white transition-colors duration-300 ease-out hover:border-transparent"
                key={o.label}
              >
                {o.icon}
                {o.label}
              </button>
            ) : (
              <Link
                href={o.href}
                className={`cursor-pointer flex items-center gap-3 border-b border-input p-6 ${activeLink === o.href ? 'bg-primary text-white border-none' : ''} hover:bg-primary hover:text-white transition-colors duration-300 ease-out hover:border-transparent`}
                key={o.label}
              >
                {o.icon}
                <span>{o.label}</span>
              </Link>
            )
          )}
        </div>
        <div className="flex md:hidden">
          {options.map((o) =>
            o.href === '/profile/logout' ? (
              <button
                onClick={handleLogout}
                className="w-full cursor-pointer flex flex-1 items-center justify-center gap-3 border-b border-input p-6 hover:bg-primary hover:text-white transition-colors duration-300 ease-out"
                key={o.label}
              >
                {o.icon}
              </button>
            ) : (
              <Link
                href={o.href}
                key={o.label}
                className={`cursor-pointer p-4 flex items-center justify-center flex-1 ${activeLink === o.href ? 'bg-primary text-white' : ''}`}
              >
                {o.icon}
              </Link>
            )
          )}
        </div>
      </nav>
      <div className="bg-white w-full text-black p-6 space-y-7.75 flex flex-col flex-1 min-h-91 h-full">
        <Heading
          text={options.find((o) => o.href === activeLink)?.label || ''}
          color="black"
          decorate={{ color: 'primary', orientation: 'horizontal' }}
          size="xlarge"
        />
        {activeLink === '/profile/me' && <ProfileForm />}
        {activeLink === '/profile/cards' && <CardList cards={cards} />}
        {activeLink === '/profile/orders' && <ProfileOrders items={games} />}
        {activeLink === '/profile/change-password' && (
          <ProfileChangePasswordForm />
        )}
      </div>
    </div>
  )
}
