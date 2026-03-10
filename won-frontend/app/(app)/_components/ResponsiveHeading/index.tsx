'use client'

import useMediaQuery from '@mui/material/useMediaQuery'
import { Heading, type HeadingProps } from '../Heading'

interface ResponsiveHeadingProps extends Omit<HeadingProps, 'color'> {
  mobileColor: 'white' | 'black'
  desktopColor: 'white' | 'black'
}

export function ResponsiveHeading({
  mobileColor,
  desktopColor,
  text,
  decorate,
  size
}: ResponsiveHeadingProps) {
  const isMobile = useMediaQuery('(max-width:767px)')
  const color = isMobile ? mobileColor : desktopColor

  return <Heading text={text} color={color} decorate={decorate} size={size} />
}
