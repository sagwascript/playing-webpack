const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin') // generate html file
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // remove all files in buil directory
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css into file
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // css minifier
const TerserPlugin = require('terser-webpack-plugin') // default js minifier
const config = require('./webpack.common.js')

module.exports = merge(config, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contentHash].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // add the extracted css into generated html
					'css-loader', // process imported css
					'sass-loader' // convert sass into css
				]
			}
		]
	},
	optimization: {
		minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
	},
	plugins: [
		// a plugin for generate index.html to serve it with hashed bundle.js
		new HtmlWebpackPlugin({
			// specify template file
			template: './src/template.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name]-[contentHash].css'
		}),
		new CleanWebpackPlugin()
	]
})
