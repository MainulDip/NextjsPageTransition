const isProd = process.env.NODE_ENV === 'production'
// git push origin --delete gh-pages
// git subtree push --prefix out origin gh-pages
module.exports = {
  basePath: isProd ? '/NextjsPageTransition' : '',
  assetPrefix: isProd ? '/NextjsPageTransition' : '',
}