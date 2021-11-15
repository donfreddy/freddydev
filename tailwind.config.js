/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const colors = require('tailwindcss/colors');

module.exports = {
  dark: 'class',
  // mode: 'jit',
  corePlugins: {
    float: false,
    clear: false,
    transitionDelay: false,
    skew: false,
  },
  theme: {
    extend: {
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#customizing-colors-with-variants
        bgColor: 'var(--bg-color)',
        bgLightColor: 'var(--bg-light-color)',
        bgDarkColor: 'var(--bg-dark-color)',
        fgColor: 'var(--fg-color)',
        fgLightColor: 'var(--fg-light-color)',
        brdColor: 'var(--brd-color)',
        errColor: 'var(--err-color)',
        acColor: 'var(--ac-color)',
        actColor: 'var(--act-color)',
        ttColor: 'var(--tt-color)',

        // default colors from tailwindcss
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        orange: colors.orange,
        yellow: colors.yellow,
        green: colors.green,
        teal: colors.teal,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
      },
    },
    fontFamily: {
      sans: 'var(--font-sans)',
      mono: 'var(--font-mono)',
      icon: 'var(--font-icon)',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      // Whitelist specific elements to keep
      whitelist: [
        'bg-color',
        'bg-light-color',
        'bg-dark-color',
        'fg-color',
        'fg-light-color',
        'brd-color',
        'err-color',
        'ac-color',
        'act-color',
        'tt-color',
      ],
      // whitelistPatterns: [/-dark$/, /-light$/],
      whitelistPatterns: [/^bg-/, /^fg-/],
    },
  },
};
