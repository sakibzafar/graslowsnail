/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
  images: {
    domains: ['graslowsnail/albums.s3.amazonaws.com'], // Adjust this to your S3 bucket domain
    hostname: 'graslowsnail'
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
    hostname: 'graslowsnail.s3.us-east-2.amazonaws.com',
      },
    ],
  },
}
