import express from 'express';
import exphbs  from 'express-handlebars';
import webpack from 'webpack';
import env from './webpack/environment';
import webpack_dev_middleware from 'webpack-dev-middleware';
import webpack_hot_middleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.babel';
import options from './webpack/middleware-options';

const app = express(),
    hbs = exphbs.create({
        defaultLayout: 'main'
    }),
    port = options.port,
    compiler = webpack(webpackConfig),
    middleware = webpack_dev_middleware(compiler, options),
    hot_middleware = webpack_hot_middleware(compiler);

//app.set('view engine', 'hbs');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(webpackConfig.output.path), middleware);

app.use(hot_middleware);

console.log(process.env);

app.get('/',(req, res) => {
    if(env.isDev) {
        res.render('home');
    }
    res.render('./dist/index.html')
});

app.listen(port);