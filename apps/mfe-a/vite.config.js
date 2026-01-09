import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_a',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteApp': './src/RemoteApp.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { target: 'esnext' },
  preview: { port: 3001 },
  server: { port: 3001 },
});
