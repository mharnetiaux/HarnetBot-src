import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from "copy-webpack-plugin";
import environment from './webpack/environment';
import path from 'path';

const config = {
    entry: environment.hotModule(),
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            include: [
                path.resolve(__dirname, './client')
            ],
            use: [
                { loader: 'babel-loader' }
            ],
            exclude: /node_modules/
        },
            {
                test: /\.(less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(hbs)$/,
                use: [{ loader: 'handlebars-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            disable: environment.embeddedStyles()
        }),
        new HtmlWebpackPlugin({
            tile: 'Home Page Template',
            template: 'index.hbs',
            inject: '</body>',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            /*{from:'./images',to:'images'}*/
        ])
    ],
    stats: {
        children: false
    },
    mode: 'none'
};

export default config;