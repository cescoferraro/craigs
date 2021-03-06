const app = require("express")();
const compiler = require('webpack')(require('./internal/webpack/dev.js'));
app.use(require('webpack-dev-middleware')(compiler));
app.use(require('webpack-hot-middleware')(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(require('webpack-hot-server-middleware')(compiler, {chunkName: 'server'}));
app.use(require("morgan")('combined'));
app.listen(4000, "0.0.0.0");
