/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This setting is fine if you don't need optimized images
  },
  eslint: {
    ignoreDuringBuilds: true, // This prevents ESLint errors from stopping deployment
  },
  reactStrictMode: true, // Helps catch issues in development (optional but recommended)
};

export default nextConfig;
