const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['./index.js'],
	output: {
		path: path.resolve(__dirname, './public/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		contentBase: './public/dist'
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'webpack app',
			template: './public/dist/index.html'
		})
	]
}
