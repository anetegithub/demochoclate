const path = require('path');

var PROD = false;

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: PROD ? 'bundle.min.js' : 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : []
};