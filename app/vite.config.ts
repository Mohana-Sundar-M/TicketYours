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
      '/v4': {
        target: 'http://13.202.1.147:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v4/, ''),
      },
      '/v5': {
        target: 'http://13.202.1.147:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v5/, ''),
      },
      '/v6': {
        target: 'http://13.202.1.147:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v6/, ''),
      },
    },
  },
});
