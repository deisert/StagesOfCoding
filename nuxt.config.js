export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  //Set Rendering to SSG. 'server' will make it SSR.
  target: 'static',

  head: {
    title: 'StagesOfCoding',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  //google-fonts npm package to handle fonts
  googleFonts: {
    prefetch: true,
    preload: true,
    families: {
      Roboto: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800],
        ital: [100, 200, 400, 800]
      },
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800],
        ital: [100, 200, 400, 800]
      }
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
