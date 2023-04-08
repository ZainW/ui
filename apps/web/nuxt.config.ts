// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { presetForms } from '@julr/unocss-preset-forms'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-headlessui',
  ],
  css: [
    '@unocss/reset/tailwind-compat.css',
  ],
  unocss: {
    presets: [
      presetUno(),
      presetIcons(),
      presetForms(),
      presetDaisy({
        themes: false,

      }),
      presetWebFonts({
        provider: 'fontshare',
        fonts: {
          satoshi: 'Satoshi',
        },
      }),
    ],

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
