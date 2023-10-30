import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base:'./',
  server: {
    open: false,
    port: 3000,
    
    proxy: {
      '/api': {
        target: 'https://82066id128.yicp.fun', // 
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },

})

