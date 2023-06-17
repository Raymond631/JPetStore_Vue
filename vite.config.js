import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,//是否自动弹出浏览器页面
    host: 'localhost',
    port: 3030,
    https: false,
    hotOnly: false,
    proxy: {
        "/api": {
            target: "http://192.168.3.195:8080/",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
    },
},
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }

})
