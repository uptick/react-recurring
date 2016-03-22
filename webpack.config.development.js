var path = require( 'path' );
var webpack = require( 'webpack' );
var config = require('./webpack.config.base');

// Use webpack dev server.
config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './dev/index'
]

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/dev/';

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
]

// Add a loader for JSX files with react-hot enabled
config.module.loaders[0].loaders.unshift( 'react-hot' );

// Setup source maps.
config.devtool = '#inline-source-map';
config.debug = true;

module.exports = config;
