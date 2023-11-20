import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => config.plugins.push(
          vuetify()
      ))
    },
  ],
  //@ts-ignore
  vite: {
    ssr: {
      noExternal: [`vuetify`]
    }
  },
  devtools: { enabled: false }
})
