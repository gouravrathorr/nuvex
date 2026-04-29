import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✏️ CHANGE THIS: set to '/your-github-repo-name/'
// Example: if your repo is "nuvex" → base: '/nuvex/'
// If using custom domain (nuvex.in) → base: '/'

export default defineConfig({
  plugins: [react()],
  base: '/nuvex/',
})
