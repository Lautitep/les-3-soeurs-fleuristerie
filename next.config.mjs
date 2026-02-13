/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/boutique',
        destination: '/',
        permanent: true,
      },
      {
        source: '/boutique/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
