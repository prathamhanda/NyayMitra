import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'frontend', // Specify the project root
  plugins: [react()],
  build: {
    // Output directory relative to the project root (e:/NyayMitra/)
    // If you want the build output in e:/NyayMitra/dist, use '../dist'
    // If you want it in e:/NyayMitra/frontend/dist, use 'dist' (default)
    outDir: '../dist', 
  }
})
