var http = require('http');
var port = 8080;
var server = http.createServer(function(request,response)
{
    console.log(`client request -> ${request}`);
    response.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
    response.end('Hello node js');


}


);

server.listen(port, function()
{
    console.log(`Server is running ...[ ${port}]`);
});