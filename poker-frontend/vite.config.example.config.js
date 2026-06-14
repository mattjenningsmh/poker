import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This proxies standard HTTP requests (e.g., /api/users)
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      // This proxies WebSocket connections
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true,
      },
    },
  },
})
