const path = require('path')

module.exports = function gatsbyConfig({ root }) {
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, 'src', 'pages')
        }
      }
    ]
  }
}
