import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import artTemplatePlugin from './src/plugins/art-template';
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    artTemplatePlugin(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/v8': {
        target: 'https://pre-api-sg.adseye.com',
        changeOrigin: true,
      },
    },
  },
  // devServer: {
  //   open: true,
  //   proxy: {
  //       '/v8': {
  //         target: 'https://pre-api-sg.adseye.com',
  //         changeOrigin: true,
  //       },
  //   }
  // }
})
