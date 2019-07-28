const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    },
    configureWebPack:{
      plugins:[
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname,'dist'),
          routes:['/']
        })
      ]
    }
  }
}
