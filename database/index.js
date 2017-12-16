const mongoose = require('mongoose');
mongoose.connect('mongodb://writetoalexander:brewdb@ds129469.mlab.com:29469/brewhop');

let beerSchema = mongoose.Schema({
  beerId: String,
  beerName: String,
  beerDescription: String,
  beerCategory: String,
  beerAbv: String,
  sampled: Boolean

});
//update this schema after getting repsonse from api
// added comment for commit testing
let Beer = mongoose.model('Beer', beerSchema);

mongoose.connection.on('connected', function(err) {
  console.log('database connected!');
});

mongoose.connection.on('error', function(err) {
  console.log('err in db connection', err);
});

let write = (item) => {
  var beer = new Beer({
    beerId: item.id,
    beerName: item.name,
    beerDescription: item.description,
    beerCategory: item.style.category.name,
    beerAbv: item.Abv,
    sampled: false
  })
  Beer.findOne({ beerName: item.name }, function(err, success) {
    if (err) {
      console.log('err in findOne', err);
    } else {
      console.log('success in findOne', success);
      if (success == null) {
        beer.save(function (err, success) {
          if (err) {
            console.log('err in save', err);
          } else {
            console.log('database saving');
            console.log('success in save', success);
          }
        })
      } else {
        console.log('beer already in db');
      }
    }

  })
}

module.exports = Beer;
module.exports.write = write;