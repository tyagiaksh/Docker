 // content of index.js
  const http = require('http');
  const port = 3030;
  const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
  };
  const server = http.createServer(requestHandler);
  server.listen(port, (err) => {
    if (err) { return console.log('something bad happened', err); }
    console.log(`server is listening on ${port}`);
  });


  // docker run -d -p 8800:80 --name task1_volume -v akash:/usr/share/nginx/html task1:latest
