import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import babel from 'vite-babel-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    (babel as any)(),
    // legacy({
    //   additionalLegacyPolyfills: ['@babel/plugin-proposal-optional-chaining'],
    //   targets: ['chrome 70']
    // })
  ],
  build: {
    target: ['es2015'],
    // target: ['chrome70']
  },
})
