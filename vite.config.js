import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite"

export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // ✅ handles refresh in local dev too
  },
})
