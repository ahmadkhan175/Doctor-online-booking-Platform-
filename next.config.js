/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // SEO: Generate sitemap automatically
  output: 'standalone',
  
  // Performance: Image optimization
  images: {
    domains: ['yourdomain.com', 'localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // SEO: Clean URLs without .html
  trailingSlash: false,
  
  // Performance: Compression
  compress: true,
  
  // SEO: Custom headers for security and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ]
  },

  // SEO: Redirects for common typos
  async redirects() {
    return [
      {
        source: '/doctor',
        destination: '/doctors',
        permanent: true,
      },
      {
        source: '/book',
        destination: '/doctors',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
