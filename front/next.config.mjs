/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://158.160.75.65/api/:path*`,
      },
    ]
  },
};

export default nextConfig;
