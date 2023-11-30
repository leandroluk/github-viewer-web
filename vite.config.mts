import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    port: 3001,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: [{ find: '#', replacement: path.resolve(__dirname, 'src') }],
  },
})
