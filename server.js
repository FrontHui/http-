const http = require('http');
const fs = require('fs');

// 创建一个 HTTP 代理服务器。
const proxy = http.createServer((req, res) => {
  console.log('request come', req.url);
  const etag = req.headers['if-none-match'];
  if (req.url === '/script.js') {
      if (etag === '777') {
        res.writeHead(304, {
          'Content-Type': 'text/javascript',
          'Cache-Control': 'max-age=20, no-cache',
          'ETag': '777',
          'Last-Modified': '123'
        });
        res.end('');
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=20, no-cache',
        'ETag': '777',
        'Last-Modified': '123'
      });
      res.end('console.log("script loaded");');
    }
  }
});

proxy.listen(8888)