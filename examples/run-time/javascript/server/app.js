const express = require('express');
const cors = require('cors');
const compression = require('compression');
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001'
];
const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200
}

const app = express();
const port = 3000;

app.use(cors(corsOptions));
app.use(compression());
app.use('/', express.static(__dirname + '/dist'));

app.get('/asset-manifest.json', function(_req, res){
  res.sendFile(__dirname + '/dist/asset-manifest.json');
});

app.get('/*', function(_req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => console.log(`Started server on port ${port}!`));
