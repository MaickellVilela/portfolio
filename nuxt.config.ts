// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  ssr: false,
  router: {
    base: '/' // base: '/<repository>/'
  },
  build: {
    publicPath: '/portfolio/_nuxt/'
  }
})

