const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const contentTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript"
};

const server = http.createServer((request, response) => {
  const requestedPath = request.url === "/" ? "/index.html" : request.url;
  const filePath = path.join(__dirname, requestedPath);
  const extension = path.extname(filePath);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "text/plain"
    });
    response.end(content);
  });
});

server.listen(port, () => {
  console.log(`Site running at http://localhost:${port}`);
});
