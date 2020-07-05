const express = require('express');
//const { createProxyMiddleware } = require('http-proxy-middleware');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
// const HttpProxy = require('http-proxy');
// const proxy = new HttpProxy();

const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
//app.use('/api', createProxyMiddleware({ target: 'https://www.nseindia.com/', changeOrigin: true }));
app.get('/ping', function (req, res) {
 return res.send('ping');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
