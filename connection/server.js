const http = require('http');
const fs = require('fs');

// 创建一个 HTTP 代理服务器。
const proxy = http.createServer((req, res) => {
  console.log('request come', req.url);
  const host = req.headers.host;
  const img = fs.readFileSync('plan.png')
  const html = fs.readFileSync('test.html','utf8');
  if (req.url === '/') {
    res.writeHead(200, { 
        'Content-Type': 'text/html',
        'Connection': 'close'
        // 'Set-Cookie': ['id=123; max-age=2','abc=234; HttpOnly'] //max-age 过期时间 HttpOnly 禁止js去访问cookie
    });
      res.end(html)
  } else {
    res.writeHead(200, { 
      'Content-Type': 'image/png',
      'Connection': 'keep-alive' // 保持长连接
    });
    res.end(img)
  }
  
});

proxy.listen(8888)