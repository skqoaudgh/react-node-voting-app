require('dotenv').config();
const express = require('express');
const cors = require('cors');

const db = require('./models');
const handle = require('./controllers');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use(handle.notFound);

app.use(handle.errors);

app.listen(port, console.log(`Node.js server has opened on port ${port}.`));
