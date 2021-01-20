const express = require('express');
const bodyparser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express();
app.use(bodyparser.json());

const proxyReviews = createProxyMiddleware({
  target: 'http://localhost:3000/',
  changeOrigin: true,
});

app.use('/api/reviews', proxyReviews);
app.use('/api/reviews/:id', proxyReviews);

app.listen(3001);