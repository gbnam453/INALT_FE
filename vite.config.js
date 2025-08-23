import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 22031,   // 원하는 포트
    host: true    // 외부에서도 접근 가능하게
  }
})
