const express = require('express');

const server = express();
server.use(express.json());


server.get('/users/', (req, res) => {
  return res.send('A rota esta up');
});


server.listen(3001);