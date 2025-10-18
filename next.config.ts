import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint 에러 무시하고 빌드 강행
  },
}

export default nextConfig

module.exports = nextConfig
