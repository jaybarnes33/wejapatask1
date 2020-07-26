const http = require("http");
const server = http.createServer((req,res) => {
res.writeHead(200, {'Content-Type': 'text/html'});
 const url = req.url;
  url === "/" ? res.write("<h2>Hello World, welcome to WeJapa Internships</h2>") : null;
  res.end();
});

server.listen(5000, () => {
    console.log("Server Started");
})

