const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('hello, world!');
});

app.listen(4000, (err) => {
  if (err) {
    return console.log('erro');
  }
  console.log('iniciou em http://localhost:4000');
});
