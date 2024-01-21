import { defineConfig } from 'vite';

export default defineConfig({
  // Your Vite configuration
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 KiB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});