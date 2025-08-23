/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Mantén tu dominio de imágenes, aquí añado Unsplash por si lo usas
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
