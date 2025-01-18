const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: process.env.NODE_ENV || 'development', //environment- production or development code, default to development code
//tell webpack where my entry file is- the very first file to start the chain reaction
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'), //output dirctory
        filename: 'bundle.js', //a bundle of everything here
        clean: true, //cleans the build directory before each build
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.jsx?$/, //regex that looks for files that ends with js or jsx
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/env', //transpile modern javascript
                        '@babel/react', //transpile JSX
                    ],
                },
            },
        },
            {
                test: /\.s?css$/, //matches css and scss files
                use: ['style-loader', 'css-loader', 'sass-loader'], //! do we need to install this in the terminal??
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            //generates index.html file
            title: 'Development',
            template: path.resolve(__dirname, 'public/index.html'),
        }),
    ],
    devServer: {
        //allows for hot reloading
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname, 'public')
        },
        port: 8000, 
        hot: true,
        open: true,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000'
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },


//install babel loaders
//figure out src and dist
//create index.html 
//add start and build scripts
};

