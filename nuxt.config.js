module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "Nuxt News | %s",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  /*
   ** Add axios globally
   */
  build: {
    // vendor: ['axios']
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/pwa'],
  serverMiddleware: [
    'redirect-ssl',
    // API middleware
    '~/api/index.js'
  ],
  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: "1y",
      setHeaders(res, path) {
        if (path.includes("sw.js")) {
          res.setHeader("Cache-Control", `public, max-age=${15 * 60}`)
        }
      }
    }
  }
};