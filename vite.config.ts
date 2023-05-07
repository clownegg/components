/// <reference types="vitest" />

import path from 'path';
import vue from '@vitejs/plugin-vue';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    port: 6199,
    open: true,
  },
  test: {
    globals: true,
    exclude: [...configDefaults.exclude],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/docs/styles/index.scss";`,
      },
    },
  },
  plugins: [vue()],
  base: '/components/',
});
