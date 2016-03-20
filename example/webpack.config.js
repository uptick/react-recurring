var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
    context: __dirname,
    entry: './index',
    output: {
        path: path.resolve( '.' ),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'babel' ]
            }
        ]
    },
    resolve: {
        modulesDirectories: [ 'node_modules' ],
        extensions: [ '', '.js', '.jsx' ]
    },
};
