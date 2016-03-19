var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './example/index'
    ],
    output: {
        path: path.resolve( './example/' ),
        publicPath: 'http://localhost:3000/example/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'react-hot', 'babel' ]
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
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        modulesDirectories: [ 'node_modules' ],
        extensions: [ '', '.js', '.jsx' ]
    },
};
