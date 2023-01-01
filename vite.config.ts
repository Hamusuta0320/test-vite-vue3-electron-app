import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import { builtinModules } from 'module'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/baidu': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/baidu/, '')
      },
      '/github': {
        target: 'https://github.com',
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/github/, '')
      }
    }
  },
  // optimizeDeps: {
  //   exclude: ['electron']
  // },
  // build: {
  //   outDir: './dist',
  //   assetsDir: '',
  //   rollupOptions: {
  //     output: {
  //       format: 'cjs'
  //     },
  //     external: [
  //       'electron',
  //       ...builtinModules
  //     ]
  //   }
  // }
})
