const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: process.env.NODE_ENV, //environment- production or development code 
//tell webpack where my entry file is- the very first file to start the chain reaction
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                },
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader'] //! do we need to install this in the terminal??
            },
        ],
    },
    plugins: [
        
    ]


//install babel loaders
//figure out src and dist
//create index.html 
//add start and build scripts
}

