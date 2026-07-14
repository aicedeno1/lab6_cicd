const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Integracion continua trabajando');
});

app.listen(port, () => {
  console.log(`El servidor se esta ejecutando en http://localhost:${port}`);
});