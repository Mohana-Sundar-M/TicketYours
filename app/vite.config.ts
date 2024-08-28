import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'http://13.202.1.147:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
      '/v3': {
        target: 'http://13.202.1.147:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v3/, ''),
      },
    },
  },
});
