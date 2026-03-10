'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '../../_components/Container'
import { Heading } from '../../_components/Heading'
import { ProfileMenu } from '../../_components/ProfileMenu'
import { usePathname } from 'next/navigation'

export function ProfileTemplate() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const pathname = usePathname()

  return (
    <Container
      className={`pb-30 mt-20.25 h-full ${isMobile ? 'px-grid-gutter' : ''} `}
    >
      <div>
        <Heading
          text="My account
"
          color="white"
          size="xxlarge"
          decorate={{ color: 'secondary', orientation: 'vertical' }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-7.5 mt-14.75">
        <ProfileMenu activeLink={pathname} />
      </div>
    </Container>
  )
}
