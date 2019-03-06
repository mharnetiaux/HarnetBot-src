import path from 'path';
import webpackConfig from '../webpack.config.babel';

const middleware_options = {
    contentBase:path.resolve(__dirname, './dist'),
    compress: true,
    hot: true,
    inline: true,
    noInfo: false,
    open: true,
    overlay: {
        warnings: true,
        errors: true
    },
    port: 8080,
    publicPath:webpackConfig.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
};

export default middleware_options;