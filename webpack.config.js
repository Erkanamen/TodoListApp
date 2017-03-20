import path from 'path';
import webpack from 'webpack';

//DIST_DIR - Express framework can use static files for initial rendering. The files will be in this folder.
//SRC_DIR - Our client and server will be implemented in this folder.
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

//Configuration of Webpack as we learned in tutorial 5
var config = {
	//Entry point : Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server
	// index.js in client file will propose all combined components : Starting point
    entry: [
        'webpack-hot-middleware/client',
        SRC_DIR + "/client/index.js",
    ], 
    output: {
    	//This files will be accessed by the server implemented by express framework.
        //path: DIST_DIR, 
        //filename: "bundle.js",
        //publicPath: "/"
        path: '/',
        publicPath: '/'
    },
    plugins: [
    	//Addtional plugins for webpack
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test:/\.js?/,
            include: SRC_DIR,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-2"]
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
}

module.exports = config;