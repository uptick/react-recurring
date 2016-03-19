var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
    context: __dirname,
    entry: './src/index',
    output: {
        path: path.resolve( './lib/' ),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'babel' ]
            },
            {
                test: /.css$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]'
                ]
            }
        ]
    },
    resolve: {
        modulesDirectories: [ 'node_modules' ],
        extensions: [ '', '.js', '.jsx' ]
    },
};
