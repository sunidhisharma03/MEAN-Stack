const express = require('express');
const fs = require('fs');
const dir = './public';
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    render(res, 'index.html');
});

app.get('/about', (req, res) => {
    render(res, 'about.html'); // Render about.html for /about route
});

app.get('/contact', (req, res) => {
    render(res, 'contact.html'); // Render contact.html for /contact route
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const render = (res, file) => {
    fs.readFile(`${dir}/${file}`, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 File Not Found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};
