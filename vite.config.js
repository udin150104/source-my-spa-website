import { defineConfig } from 'vite';
import obfuscatorPlugin from 'rollup-plugin-obfuscator';
import string from 'vite-plugin-string';

export default defineConfig({
  // plugins: [
  //   string({
  //     include: ['**/*.html'],
  //   }),
  // ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      plugins: [
        obfuscatorPlugin({
          compact: true,
          controlFlowFlattening: true,
          deadCodeInjection: true,
          debugProtection: true,
          debugProtectionInterval: true,
          disableConsoleOutput: true,
          rotateStringArray: true,
          selfDefending: true,
          stringArray: true,
          stringArrayThreshold: 0.75,
        }),
      ],
    },
  },
});