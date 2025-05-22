import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Layihe4-vite', 
  server: {
    open: true,
  },
})
