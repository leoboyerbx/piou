module.exports = {
  lintOnSave: false,

  pwa: {
    name: 'Piou !',
    themeColor: '#5D73D8',
    msTileColor: '#ffffff',
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png'
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
