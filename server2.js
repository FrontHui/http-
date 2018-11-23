const http = require('http');
const fs = require('fs');

// 创建一个 HTTP 代理服务器。
const proxy = http.createServer((req, res) => {
  console.log('request come', req.url);
  const html = fs.readFileSync('test.html','utf8');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.writeHead(200, {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'X-Test-Cors',
                        'Access-Control-Allow-Methods': 'POST, PUT, Delete',
                        'Access-Control-Max-Age': '1000'
                    });
  res.end('i am a boy');
});

proxy.listen(8887);