const path = require('path');




module.exports = {
    entry: {
      index : './assets/javascript/index.js',
      activity : './assets/javascript/activity.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './static/js/'),
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
          },
        ]
      }
};

