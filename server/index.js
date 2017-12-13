const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const Brewery = require('../database/index.js');

const port = 3000;



app.use('/', (req, res) => {
  res.send({hi: 'hello world'});
});




app.listen(port, function() {
  console.log(`listening on port ${port}`);
});