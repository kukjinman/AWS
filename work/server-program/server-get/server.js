var http = require('http');
var url = require('url');
var querystring = require('querystring');
var port = 8080;
var server = http.createServer((request,response) => { 
    console.log('--- log start ---');
    var parseUrl = url.parse(request.url);
    console.log(`parseUrl => ${parseUrl}`);

    var parsedQuery = querystring.parse(parseUrl.query, '&', '=');
    console.log(parsedQuery);
    var name = parsedQuery.name;
    console.log(`name 변수내용 [ ${name} ]`);
    console.log(`--- log end ---`);

    response.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
    response.end(`name : ${parsedQuery.name}, age = ${parsedQuery.age}, tel = ${parsedQuery.tel}`);

});

server.listen(port, function()
{
    console.log(`Server is running ...[ ${port}]`);
});