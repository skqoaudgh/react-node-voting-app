const express = require('express');

const handle = require('./controllers');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use(handle.notFound);

app.use(handle.errors);

app.listen(port, console.log(`Node.js server has opened on port ${port}.`));
