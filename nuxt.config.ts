// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  router: {
    base: '/portfolio/' // base: '/<repository>/'
  }
})

