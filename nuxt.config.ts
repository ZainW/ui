// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  unocss: {
    uno: true,
    icons: true,
  },
  typescript: {
    typeCheck: false,
    strict: true,
  },
})
