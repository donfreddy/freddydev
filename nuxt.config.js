// Common options
export const options = {
  name: 'Don Freddy', shortDescription: 'My portfolio', description: 'Description here', loading: {
    color: 'var(--ac-color)', background: 'var(--bg-color)'
  }, app: {
    background: '#202124'
  }, social: {
    twitter: ''
  }
};

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: 'freddydev'
  },

  // Default: localhost
  // server: {
  //   host: '0.0.0.0',
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'freddydev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      name: 'keywords',
      content: 'hoppscotch, hopp scotch, hoppscotch online, hoppscotch app, postwoman, postwoman chrome, postwoman online, postwoman for mac, postwoman app, postwoman for windows, postwoman google chrome, postwoman chrome app, get postwoman, postwoman web, postwoman android, postwoman app for chrome, postwoman mobile app, postwoman web app, api, request, testing, tool, rest, websocket, sse, graphql, socketio'
    }, {
      name: 'X-UA-Compatible', content: 'IE=edge, chrome=1'
    }, {
      itemprop: 'name', content: `${options.name} • ${options.shortDescription}`
    }, {
      itemprop: 'description', content: options.description
    }, {charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'},],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}, {
      rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css'
    }, {rel: 'preconnect', href: 'https://fonts.gstatic.com/'},]
  },

  // Customize the progress-bar color (https://nuxtjs.org/api/configuration-loading/#customizing-the-progress-bar)
  loading: {
    color: options.loading.color, continuous: true
  },

  // Customize the loading indicator (https://nuxtjs.org/api/configuration-loading-indicator)
  loadingIndicator: {
    name: 'pulse', color: options.loading.color, background: options.loading.background
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['aos/dist/aos', '~/assets/css/fonts', '~/assets/scss/themes', '~/assets/scss/styles'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: '~/plugins/aos', mode: 'client'}, {src: '~/plugins/v-tooltip'}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [// https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss', // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode', // https: //github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts', // https://github.com/nuxt/typescript
    '@nuxt/typescript-build', // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://github.com/nuxt-community/modules/tree/master/packages/toast
    '@nuxtjs/toast', // https://github.com/nuxt-community/i18n-module
    'nuxt-i18n', 'vue-scrollto/nuxt',],

  // Tailwindcss module configuration: https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css', configPath: 'tailwind.config.js', exposeConfig: false, config: {}, // Disable the viewer in development
    viewer: false
  },

  // Toast module configuration (https://github.com/nuxt-community/modules/tree/master/packages/toast)
  toast: {
    position: 'bottom-center', duration: 3000, theme: 'bubble', keepOnHover: true
    // fullWidth: true,
  },

  // Color Mode module configuration (https://github.com/nuxt-community/color-mode-module)
  colorMode: {
    classSuffix: '', preference: 'dark', fallback: 'dark'
  },

  // Google Fonts module configuration (https://github.com/nuxt-community/google-fonts-module)
  googleFonts: {
    download: true, preconnect: true, display: 'swap', families: {
      'Material+Icons': true, Poppins: true, Nunito: [300, 400, 500, 600, 700, 800]
    }, fontsPath: '~assets/fonts'
  },

  // i18n module configuration (https://github.com/nuxt-community/i18n-module)
  i18n: {
    locales: [{
      code: 'en', name: 'English', iso: 'en-US', file: 'en-US.json'
    }, {
      code: 'fr', name: 'French', iso: 'fr-FR', file: 'fr-FR.json'
    },], defaultLocale: 'en', vueI18n: {
      fallbackLocale: 'en'
    }, lazy: true, langDir: 'lang/', detectBrowserLanguage: {
      alwaysRedirect: true, fallbackLocale: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // You can extend webpack config here
    extend(config, {isDev, isClient}) {
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development';
      }
      config.node = {
        fs: 'empty'
      };

      if (isClient) {
        //
      }
    }, parallel: true, cache: true
  },

  // Generate config: https://nuxtjs.org/api/configuration-generate
  generate: {
    fallback: true, interval: 2000
  }
};
