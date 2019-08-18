const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const config = require('./webpack.common.js')

module.exports = merge(config, {
	mode: 'development',
	devtool: 'none',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		// a plugin for generate index.html to serve it with hashed bundle.js
		new HtmlWebpackPlugin({
			// specify template file
			template: './src/template.html'
		})
	],
	devServer: {
		open: true, // to automatically open default browser
		openPage: './dist/index.html' // specify which file to open
	}
})
