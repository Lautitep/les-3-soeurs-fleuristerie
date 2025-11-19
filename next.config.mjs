/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/boutique/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/boutique/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
