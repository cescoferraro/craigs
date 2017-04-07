const app = require("express")();
const webpack = require('webpack');
const morgan = require('morgan');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');
const HotServerMiddleware = require('webpack-hot-server-middleware');
const compiler = webpack([
	require("./internal/webpack/vendor.js"),
	require("./internal/webpack/client.js"),
	require("./internal/webpack/server.js")
]);


app.use(DevMiddleware(compiler));
app.use(
	HotMiddleware(compiler.compilers.find(
		compiler => compiler.name === 'client'
	)));
app.use(HotServerMiddleware(compiler, {chunkName: 'server'}));
app.use(morgan('combined'));
app.listen(4000, "0.0.0.0");
