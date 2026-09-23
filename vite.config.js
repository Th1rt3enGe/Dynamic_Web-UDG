import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
``
const REPO_NAME = 'Dynamic_Web-UDG'
// WAMP/XAMP serves the back-end with the vhost (this should match the one assigned).
const WAMP_ORIGIN = process.env.VITE_WAMP_ORIGIN || 'terraglacialis'

export default defineConfig({
  // Changed to root directory since it will no longer live in GitHub Pages
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      //
      '/api': { target: 'WAMP_ORIGIN', changeOrigin: true },
      '/uploads': { target: 'WAMP_ORIGIN', changeOrigin: true },
    }
  },
})
