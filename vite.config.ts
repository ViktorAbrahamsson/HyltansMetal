import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[local]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '/src/styles/variables' as v;
          @use '/src/styles/mixins' as m;
        `,
      },
    },
  },
});
