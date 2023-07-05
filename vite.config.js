// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "/webgl-shool-task/",
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'),
        lesson01: resolve(__dirname, './src/pages/task01/index.html'),
      },
    },
  },
})