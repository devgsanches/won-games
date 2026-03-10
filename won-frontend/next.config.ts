import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cloudflare.steamstatic.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'shared.cloudflare.steamstatic.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.gog-statics.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'items.gog.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
