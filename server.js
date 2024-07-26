import http from 'http';
import https from 'https';
import express from 'express';
import path from 'path';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;
app.use(compression());
app.use(express.json());
app.use(express.static('dist'));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const server = http.createServer(app);
const port = 8080;

server.listen(port);
console.debug(`Server listening on port ${port}`);
