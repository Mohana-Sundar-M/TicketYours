import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Development settings
    return {
      plugins: [react()],
      server: {
        proxy: {
          '/v1': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/v1/, ''),
          },
          '/v3': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/v3/, ''),
          },
          '/v4': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/v4/, ''),
          },
          '/v5': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/v5/, ''),
          },
          '/v6': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/v6/, ''),
          },
        },
      },
    };
  } else {
    // Production settings
    return {
      plugins: [react()],
    };
  }
});
