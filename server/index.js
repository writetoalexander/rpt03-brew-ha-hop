const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const Beer = require('../database/index.js');
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
      res.status(404).send('oops');
    } else {
      //console.log('post successful heres the data', data)
      for (var i = 0; i < 4; i ++) {
        result.push(data[random.randomBeer(0, data.length - 1)]);
      }

      for (var i = 0; i < result.length; i++) {
        Beer.write(result[i]);
      }
      console.log('result looks like', result[0])
      res.status(200).json(result);
    }
  })

  //brewdb.search.beers({q: req.body.query})



});


app.get('/brews', function(req, res) {


  console.log('get happening');
  Beer.find({}, (err, data) => {
    if (err) {
      console.log('err in app.get', err);
    } else {
      console.log('successful app.get!');
      res.send(data);
    }
  })


});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});