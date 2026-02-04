import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isVercel = Boolean(process.env.VERCEL);
const isProd = process.env.NODE_ENV === 'production';
const outDir = process.env.VITE_OUT_DIR || 'dist';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
      },
    },
  },
  base: isVercel ? '/' : isProd ? './' : '/',
  build: {
    outDir,
  },
});
