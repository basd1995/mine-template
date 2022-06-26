/*
 * @Author: basd1995
 * @Date: 2022-06-20 23:03:54
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-26 22:22:23
 */
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dts: 'src/auto-import.d.ts',
      dirs: [
        'src/composables',
        'src/store',
        'src/utils',
      ],
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Unocss(),
    Inspect(),
  ],
})
