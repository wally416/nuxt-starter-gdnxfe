// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    // ...
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
    'nuxt-i18n'
  ],
  // ...
  // to avoid name conflicts in generators
  components: false
})
