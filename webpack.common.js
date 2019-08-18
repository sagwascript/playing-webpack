const path = require('path')

module.exports = {
	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.html$/,
				use: ['html-loader'] // to require the src attribute in html element
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name]-[hash].[ext]',
					outputPath: 'assets/imgs'
				}
			}
		]
	},
	resolve: {
		// resolve the files that imported without extension
		extensions: ['.js', '.jsx']
	}
}
