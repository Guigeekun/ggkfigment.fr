import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relative -> deployable at any static host / subpath
export default defineConfig({
  base: './',
  plugins: [react()],
})
