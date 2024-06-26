import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { ViteEnvCompatible } from 'vite-plugin-env-compatible';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),
    reactRefresh(),
    ViteEnvCompatible({
      dotenvFile: '.env',
      // List all environment variables you want to expose
      expose: ['REACT_APP_FIREBASE_API_KEY', 'REACT_APP_FIREBASE_AUTH_DOMAIN', 'REACT_APP_FIREBASE_PROJECT_ID', 'REACT_APP_FIREBASE_STORAGE_BUCKET', 'REACT_APP_FIREBASE_MESSAGING_SENDER_ID', 'REACT_APP_FIREBASE_APP_ID'],
    }),
  ],
});
