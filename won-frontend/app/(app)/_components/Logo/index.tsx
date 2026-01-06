import Image from 'next/image'

interface LogoVariants {
  className?: string
  dark?: boolean
  light?: boolean
  home?: boolean
}

export function Logo({ className, dark = true, light, home }: LogoVariants) {
  if (dark && !light && !home) {
    return (
      <>
        <Image
          src="/dark-logo.svg"
          alt="Logo"
          width={200}
          height={59.84}
          className={className}
        />
      </>
    )
  }

  if (light) {
    return (
      <>
        <Image
          src="/light-logo.svg"
          alt="Logo"
          width={110}
          height={33}
          className={className}
        />
      </>
    )
  }

  if (home) {
    return (
      <>
        <Image
          src="/Icon.svg"
          alt="Logo"
          width={58}
          height={45}
          className={className}
        />
      </>
    )
  }
}
