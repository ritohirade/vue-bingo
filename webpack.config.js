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
                test: /\.vue$/, loader: 'vue'
            }
        ]
    }
    devtool: 'inline-source-map',
    plugins: [
      new CopyWebpackPlugin([
          {from: './src/index.html'}
      ])
    ]
};
