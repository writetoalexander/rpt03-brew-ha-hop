const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const Brewery = require('../database/index.js');
const axios = require('axios')
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));




// app.use('/', (req, res) => {
//   res.send({hi: 'hello world'});
// });

app.get('/brews', function(req, res, err) {
  console.log('get happening!');
  res.status(200).send('success');


})


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});