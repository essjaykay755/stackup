import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1800,
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'zustand', 'dexie'],
  },
})
