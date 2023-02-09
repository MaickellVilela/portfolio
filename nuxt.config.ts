// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/',
    buildAssetsDir: 'assets',
  },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/content',],
})

