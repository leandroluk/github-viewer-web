import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: Number(process.env.PORT ?? 3001),
  },
  resolve: {
    alias: [{ find: '#', replacement: path.resolve(__dirname, 'src') }]
  },
  plugins: [react()],
});
