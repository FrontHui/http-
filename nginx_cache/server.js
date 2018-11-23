const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const wait = (seconds) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    }, seconds*1000 );
  })
}
// 创建一个 HTTP 代理服务器。
const proxy = http.createServer((req, res) => {
  console.log('request come', req.url);
  const html = fs.readFileSync('test.html', 'utf8');
  if (req.url === '/') {
    res.writeHead(200, { 
        'Content-Type': 'text/html'
    });
      res.end(html)
  }
  if (req.url === '/data') {
    res.writeHead(200, { 
      'Cache-Control': 's-max-age=200',
      'Vary': 'X-Test-Cache'
  });
    wait(2).then(()=>{
      res.end('success');
    });
    
  }

});

proxy.listen(8888)