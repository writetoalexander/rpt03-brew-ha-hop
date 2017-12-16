const Beer = require('../database/index.js')

let randomBeer = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let updateBeer = (el) => {
  console.log('el looks like ', el);
  console.log('beer id looks like', el.beerId);
  Beer.update({ beerId: el.beerId }, {
    themePark: 'DisneyLand',
    sampled: true
  }, function(err, raw) {
    if (err) {
      console.log('err in cb', err);
    } else {
      console.log('raw in cb', raw);
    }
  })


  // Beer.find({ beerId: el.beerId }, function(err, data) {
  //   console.log('err in cb', err);
  //   console.log('data in cb', data);
  // })

}
module.exports.randomBeer = randomBeer;
module.exports.updateBeer = updateBeer;