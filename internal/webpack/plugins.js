let path = require('path');
let webpack = require('webpack');
let StatsWebpackPlugin = require('stats-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const env = process.env.NODE_ENV || 'development';
let Visualizer = require('webpack-visualizer-plugin');
let WebpackChunkHash = require('webpack-chunk-hash');


let server = [
	new WebpackChunkHash({algorithm: 'md5'}),
	new webpack.NamedModulesPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.DefinePlugin({
		'NODE_ENV': JSON.stringify(env),
		'process.env.NODE_ENV': JSON.stringify(env)
	}),
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false,
		options: {
			context: '/',
			postcss: [
				require("lost")(),
				require("postcss-cssnext")({
					browsers: '> 0%', customProperties: true,
					colorFunction: true, customSelectors: true,
				})],
			tslint: {
				emitErrors: false,
				failOnHint: false,
				resourcePath: 'src',
				configFile: 'src/tsconfig.json'
			}
		},
	})
];

let client = [
	...server,

];


// HOT-MODULE-REPLACEMENT
if (process.env.NODE_ENV === "production") {
	client.push(new webpack.optimize.CommonsChunkPlugin(
		{
			name: 'vendor',
			chunks: ['app', 'libs'],
			filename: 'vendor.js'
		}));
	client.push(new FaviconsWebpackPlugin({
		logo: './src/shared/icon/favicon.jpg',
		prefix: 'icons/'
	}));
	client.push(new StatsWebpackPlugin('stats.json', {
		chunkModules: true,
		exclude: [/node_modules/]
	}));
} else {
	client.push(new webpack.HotModuleReplacementPlugin());
	client.push(
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: require('../../www/vendor.json')
		}));

}


module.exports = {client: client, server: server};
