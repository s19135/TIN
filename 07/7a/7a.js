const http = require("http");
const fs = require('fs');
const url = require('url');
const host = 'localhost';
const port = 3000;
const server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    const query = url.parse(request.url,true).query;
    let req = request.url.toString().split("?")[0];
    let num1 = parseFloat(query['num1']);
    let num2 = parseFloat(query['num2']);
    switch (req)
    {
        case '/add':
            createHtml(response,num1 + num2, num1, num2, '+');
            break;
        case '/sub':
            createHtml(response,num1 - num2, num1, num2, '-');
            break;
        case '/mul':
            createHtml(response,num1 * num2, num1, num2, '*');
            break;
        case '/div':
            createHtml(response,num1 / num2, num1, num2, '/');
            break;
        default:
            createHtml(response,"Smth went wrong. Check the url");
            break;
    }
});
function createHtml(response,result, num1, num2, sign) {
    fs.readFile('index.html', (err, data) => {
        let file = data.toString();
        if(result !== null)
        {
            file = file.replace("<!---->","<p1>" + num1 + " " + sign + " " + num2 + " = " + result + "</p1>");
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(file);
    });
}
server.listen(port, host);