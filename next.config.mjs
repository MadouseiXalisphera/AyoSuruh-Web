/** @type {import('next').NextConfig} */
const nextConfig = {
  // Baris ini yang paling krusial biar Next.js ngeluarin folder "out"
  output: 'export',

  // Supaya link CSS dan gambar nggak patah di GitHub Pages
  basePath: '/AyoSuruh-Web',

  // Mematikan optimasi gambar server-side bawaan Next.js
  images: {
    unoptimized: true,
  },
};

export default nextConfig;