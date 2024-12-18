import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['md-linedivider'].includes(tag),
        }
      }
    }),
    vueJsx(),
    VueDevTools(),
  ],
  server:{
    port: 4173
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./WebPagePortafolio/src', import.meta.url)),
    }
  }
})
