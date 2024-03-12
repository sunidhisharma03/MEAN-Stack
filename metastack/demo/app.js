const http = require('http');
const server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-type': 'text/html'});
    // response.write('<h1>Welcome to Node.js!</h1>'); //you can add this in the end function as well 
    // response.end(); // if you dont do this the page reloads in an infinite loop 
    if(request.method === 'GET'){
       response.end('GET'); 
    }
    if(request.method === 'POST'){
        response.end('POST'); 
     }
     if(request.method === 'PUT'){
        response.end('PUT'); 
     }
     if(request.method === 'DELETE'){
        response.end('DELETE'); 
     }
    

})//.listen(3000, () => console.log("http://localhost:3000")); this will work too
server.listen(3000, () => console.log("http://localhost:3000"));

