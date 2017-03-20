import path from 'path';
import express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import webpack from 'webpack';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


/***************SERVER*************/
//server creation
const server = new express(); 
//webpack config
import config from '../../webpack.config';
//webpack compiler
const compiler = webpack(config);
//sever setting : webpack will provide hot-loading service
server.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  noInfo: true
}));
server.use(webpackHotMiddleware(compiler));
// server configuration
import serverConfig from './config';

// api routers for adding removing toggling items 
import todoRoutes from './routes/todo.routes';

// Apply body Parser and server public assets and routes
server.use(express.static(path.resolve(__dirname, '../dist')));
server.use(bodyParser.json());

server.use('/api', todoRoutes);


/***************Starting DB*****************/
//Set native promises as mongoose promise
mongoose.Promise = global.Promise;

//MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

/***************Ending DB*****************/


//These codes can handle any request from URL properly
server.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html'));
});
server.get('/intro', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html'));
});
server.get('/todolist', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html'));
});
server.get('/questions/:id', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html'));
});


// starting point of server / app
server.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`tutorial 7 server is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default server;
