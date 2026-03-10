import Image from 'next/image'

export interface PlatformsProps {
  platforms: string[]
}

const platformIcons: Record<string, { src: string; alt: string }> = {
  windows: { src: '/windows.svg', alt: 'Windows' },
  macos: { src: '/apple.svg', alt: 'Mac OS' },
  linux: { src: '/linux.svg', alt: 'Linux' }
}

export function Platforms({ platforms }: PlatformsProps) {
  return (
    <div className="flex items-center gap-4">
      {platforms.map((platform) => {
        const icon = platformIcons[platform]
        if (!icon) return null
        return (
          <Image
            key={platform}
            src={icon.src}
            alt={icon.alt}
            width={16}
            height={16}
          />
        )
      })}
    </div>
  )
}
