module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + '/bin/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue',
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    devtool: 'inline-source-map',
    plugins: [
      new CopyWebpackPlugin([
          {from: './src/index.html'}
      ])
    ]
};
