import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Repository name — GitHub Pages project sites are served from
// https://<user>.github.io/<repo>/, so the Vite base must match the repo name.
// Change this (and the homepage/basename references) if you rename the repo.
const REPO_NAME = 'Dynamic_Web-UDG'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  plugins: [react(), tailwindcss()],
})
