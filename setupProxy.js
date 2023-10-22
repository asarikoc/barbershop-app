const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/nearbysearch',
    createProxyMiddleware({
      target: 'https://localhost:7282',
      changeOrigin: true,
      secure: false
    })
  );
};
