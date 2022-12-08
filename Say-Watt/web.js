const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/search', (req, res) => {
  res.sendFile(__dirname + '/public/search.html');
});

app.use(express.static('public'));

server.listen(2001, () => {
  console.log('listening on *:2001');
});