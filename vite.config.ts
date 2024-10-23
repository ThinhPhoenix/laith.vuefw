import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias for src directory
    },
  },
  build: {
    outDir: 'dist', // Output directory for production build
  },
  server: {
    port: 5173, // Local development server port
  },
});
