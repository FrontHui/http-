const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
// 创建一个 HTTP 代理服务器。
const proxy = http.createServer((req, res) => {
  console.log('request come', req.url);
  const html = fs.readFileSync('test.html');
  if (req.url === '/') {
    res.writeHead(200, { 
        'Content-Type': 'text/html',
        // 'Content-Encoding': 'gzip'
        // 'Set-Cookie': ['id=123; max-age=2','abc=234; HttpOnly'] //max-age 过期时间 HttpOnly 禁止js去访问cookie
    });
      // res.end(zlib.gzipSync(html))
      res.end(html)
  } else{
    res.writeHead(200, { 
      'Content-Type': 'text/plain',
      // 'Content-Encoding': 'gzip'
      // 'Set-Cookie': ['id=123; max-age=2','abc=234; HttpOnly'] //max-age 过期时间 HttpOnly 禁止js去访问cookie
    });
    res.end('')
  }
});

proxy.listen(8888)