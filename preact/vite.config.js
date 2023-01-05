import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import content from '@originjs/vite-plugin-content'
import { viteStaticCopy } from 'vite-plugin-static-copy'


// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    preact(),
    content(),
    viteStaticCopy({
      targets: [
        {
          src: './src/assets',
          dest: './'
        },
        {
          src: './src/manifest.json',
          dest: './'
        },
        {
          src: './src/assets/favicon.ico',
          dest: './'
        }
      ]
    })
  ],
  esbuild: {
    loader: 'jsx'
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
}));


// import { defineConfig } from 'vite'

// export default defineConfig(() => ({
//   esbuild: {
//     loader: 'jsx',
//   },

// })
