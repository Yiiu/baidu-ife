module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./dist",
        filename: "[name].js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {test: /\.vue$/ , loader: "vue"},
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
        ]
    },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },    
  resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue']
    }
}