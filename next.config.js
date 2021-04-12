const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/NextjsPageTransition' : '',
  assetPrefix: isProd ? '/NextjsPageTransition' : '',
}