import express from 'express';
import { readFile } from 'fs';

const app = express();

app.get('/', (req, res) => {
  readFile('./index.html', 'utf-8', (err, html) => {
    if (err) {
      res.send('service currenty unavailable');
    }

    res.send(html);
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
