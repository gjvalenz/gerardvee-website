/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/gerardvee-website',
  assetPrefix: '/gerardvee-website'
}

module.exports = nextConfig
