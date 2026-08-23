import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { prerender } from './prerender'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), prerender()],
})
