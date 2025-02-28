// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Tailwind config within Vite config
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            colors: {
              // Dark Blue (#1B365D)
              // Light Grey (#E0E0E0)
              // Teal (#008080)
            },
          },
        },
      },
    }),
  ],
  assetsInclude: ['**/*.glb', '**/*.gltf'], // Allow Vite to handle GLB files properly
});
