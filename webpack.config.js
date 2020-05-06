const path = require('path');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'webpack.bundle.[name].js',
		publicPath: "/dist"
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: "/node_modules/"
		}]
	},
	resolve: {
		extensions: ['.js', '.ts']
	}
};