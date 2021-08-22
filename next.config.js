const path = require('path');

module.exports = {
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'es-ES',
  },
  images: {
    domains: ['github.blog'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
