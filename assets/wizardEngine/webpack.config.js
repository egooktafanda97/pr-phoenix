const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		script: "./src/index.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "svg-url-loader",
						options: {
							limit: 10000,
						},
					},
				],
			},
		],
	},
	optimization: {
		minimize: true,
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			Popper: ["popper.js", "default"],
		}),
	],
	resolve: {
		extensions: [".js", ".jsx", "scss", "css"],
	},
};
