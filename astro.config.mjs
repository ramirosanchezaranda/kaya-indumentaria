import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    react({
      include: ['**/*.jsx', '**/*.tsx'],
      resolveClientOnlyImports: true
    }),
    tailwind( {
      configFile: './tailwind.config.js',
    })
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    define: {
      'process.env.SUPABASE_KEY': JSON.stringify(process.env.SUPABASE_KEY)
    },
    server: {
      host: 'localhost',
      port: 3000
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    },
    build: {
      rollupOptions: {
        external: ['astro:content']
      }
    }
  }
});