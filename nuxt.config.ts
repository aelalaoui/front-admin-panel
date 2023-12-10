import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => config.plugins.push(
          vuetify()
      ))
    },
  ],
  pinia: {
    //@ts-ignore
    autoImports: ['defineStore'],
  },
  imports: {
    dirs: ["./stores"],
  },
  //@ts-ignore
  vite: {
    ssr: {
      noExternal: [`vuetify`]
    }
  },
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiBackUrl: process.env.API_BACK_URL,
    }
  },
  privateRuntimeConfig: {},
})
