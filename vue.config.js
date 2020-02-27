const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    },
    mode: 'production',
    configureWebPack:{
      plugins:[
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname,'dist'),
          routes:['/'],
          renderer: new PuppeteerRenderer()
        })
      ]
    }
  }
}
