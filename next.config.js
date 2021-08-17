const path = require('path');

module.exports = {
  images: {
    domains: ['github.blog'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
