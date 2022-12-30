import * as express from 'express';
import * as http from 'http';
const app = express();
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
