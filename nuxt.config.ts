// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/_main.scss'
  ],
  target: 'static',
  router: {
    base: '/radicale-kunstspeeltuin-website/'
  }
})
