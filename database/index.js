const mongoose = require('mongoose');
mongoose.connect('mongodb://writetoalexander:brewdb@ds129469.mlab.com:29469/brewhop');

let brewerySchema = mongoose.Schema({
  breweryName: String,
  beerName: String,
  beerUrl: String

});
//update this schema after getting repsonse from api
// added comment for commit testing
let Brewery = mongoose.model('Brewery', brewerySchema);

mongoose.connection.on('connected', function(err) {
  console.log('hitting that database!');
});

mongoose.connection.on('error', function(err) {
  console.log('err in db connection', err);
});

module.exports = Brewery;