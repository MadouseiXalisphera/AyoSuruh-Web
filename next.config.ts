import type { NextConfig } from "next";

const config: NextConfig = {
  // 1. Aktifkan mode export statis
  output: 'export',

  // 2. Tentukan basePath (PENTING! Sesuaikan dengan nama repo lo di GitHub)
  // Url lo bakal jadi: https://MadouseiXalisphera.github.io/AyoSuruh-Web
  basePath: '/AyoSuruh-Web',

  // 3. (Opsional tapi disarankan) Matikan optimasi gambar bawaan Next.js
  // Karena GitHub Pages nggak punya server untuk nge-resize gambar otomatis.
  images: {
    unoptimized: true,
  },
};

export default config;