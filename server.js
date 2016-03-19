var webpack = require( 'webpack' );
var WebpackDevServer = require( 'webpack-dev-server' );
var config = require( './webpack.config.development' );

var host = 'localhost';

new WebpackDevServer( webpack( config ), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    noCredentials: true,
    historyApiFallback: true
}).listen( 3000, host, function( err, result ) {
    if( err )
        console.log( err );
    console.log( 'Listening at ' + host + ':3000' );
})
