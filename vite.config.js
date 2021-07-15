import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
hmr: { overlay: false } 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
