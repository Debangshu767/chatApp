import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Note the import change here

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'ChatApp',
        short_name: 'Chat',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/src/assets/meetme.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/src/assets/meetme.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Workbox options
      },
    }),
  ],
});
