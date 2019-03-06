import express from 'express';
import exphbs  from 'express-handlebars';
import webpack from 'webpack';
import webpack_dev_middleware from 'webpack-dev-middleware';
import webpack_hot_middleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.babel';
import options from './webpack/middleware-options';

const app = express(),
    port = options.port,
    compiler = webpack(webpackConfig),
    middleware = webpack_dev_middleware(compiler, options),
    hot_middleware = webpack_hot_middleware(compiler);

app.set('view engine', 'hbs');

///app.set('views','./');

app.engine('hbs', exphbs());

app.use(express.static(webpackConfig.output.path), middleware);

app.use(hot_middleware);

app.get('/',(req, res) => {
    "use strict";
    res.render('index');
});

app.listen(port);