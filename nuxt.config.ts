import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/_nuxt/assets/image/logo.png' }
      ],
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/css/main.scss" as *;
            @use "~/assets/css/fonts.scss" as *;
            @use "~/assets/css/loading.scss" as *;
          `,
        }
      }
    }
  },
  components: [
    { path: '~/components', pathPrefix: true },
  ],
})
