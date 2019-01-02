const { addToWebpackConfig } = require('@dschau/gatsby-theme-utils')
const { name: packageName } = require('./package')

exports.onCreateWebpackConfig = addToWebpackConfig(packageName)
