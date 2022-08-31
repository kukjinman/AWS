var http = require('http');
var querystring = require('querystring');
var port = 8080;

var server = http.createServer(function (request,response) { 

    var postdata = '';
    request.on('data', function(data)
    {
        postdata+=data;
    });

    
    request.on('end', function()
    {
        var parsedQuery = querystring.parse(postdata);
        console.log(parsedQuery);
        console.log(`${parsedQuery.var1}`);
        console.log(parsedQuery.postdata);
        console.log(parsedQuery.port);
        console.log(parsedQuery.http);
        console.log(parsedQuery.log);



        response.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
        response.end(`var1 = [ ${parsedQuery.var1}]`);
        
    })
    
}).listen(port, function()
{
    console.log(`Server is running ...[ ${port}]`);
});