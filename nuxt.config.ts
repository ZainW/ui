// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { presetForms } from '@julr/unocss-preset-forms'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-headlessui',
  ],
  unocss: {
    presets: [presetUno(), presetIcons(), presetForms()],

  },
  typescript: {
    typeCheck: false,
    strict: true,
    shim: false,
  },
  headlessui: {
    prefix: '',
  },
})
