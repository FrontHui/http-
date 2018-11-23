const http = require('http');
// 创建一个 HTTP 代理服务器。
const proxy = http.createServer((req, res) => {
  console.log('request come', req.url);
  if (req.url === '/') {
    res.writeHead(302, { 
        'Location': '/new'
    });
      res.end('')
  } else if (req.url === '/new'){
    res.writeHead(200, { 
      'Content-Type': 'text/html'
    });
    res.end('<div>this is content</div>')
  } else {
    res.writeHead(200, { 
      'Content-Type': 'text/plain'
    });
    res.end('')
  }
});

proxy.listen(8888)