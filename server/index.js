const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const Brewery = require('../database/index.js');
const axios = require('axios')
const port = 3000;
const key = require('../config.js')
const BreweryDb = require('brewerydb-node');
const request = require('request');
let random = require('../helpers/randomIndex.js');
let result = [];


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));



let brewdb = new BreweryDb(key.TOKEN);

app.post('/brews', function(req, res) {
  console.log('post happening!');
  //console.log('key looks like', key.TOKEN);


  brewdb.search.beers({q: req.body.q}, function(err, data) {
    result = [];
    console.log('query looks like', req.body.q);
    if (err) {
      console.log('err in post ', err);
      //res.status(404).send('oops');
    } else {
      //console.log('post successful heres the data', data)
      for (var i = 0; i < 4; i ++) {
        result.push(data[random.randomBeer(0, data.length - 1)]);
      }
      console.log('result looks like', result[0])
      res.status(200).json(result);
    }
  })

  //brewdb.search.beers({q: req.body.query})



});


app.get('/brews', function(req, res) {


  res.send({hi: 'hello world'});

  console.log('get happening!');


  res.status(200).send('success');


});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});