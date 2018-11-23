const http = require('http');
const fs = require('fs');

// 创建一个 HTTP 代理服务器。
const proxy = http.createServer((req, res) => {
  console.log('request come', req.url);
  const host = req.headers.host;
  
  if (req.url === '/') {
    const html = fs.readFileSync('test.html','utf8');
      if (host === 'a.test.com') {
        res.writeHead(200, { 
            'Content-Type': 'text/html',
            'Set-Cookie': ['id=123; max-age=2','abc=234; HttpOnly'] //max-age 过期时间 HttpOnly 禁止js去访问cookie
           });
      } else {
        res.writeHead(200, { 
            'Content-Type': 'text/html',
            // 'Set-Cookie': ['id=123; max-age=2','abc=234; HttpOnly'] //max-age 过期时间 HttpOnly 禁止js去访问cookie
           });
      }
      
    res.end(html);
  }
  
});

proxy.listen(8888)