import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import WishList from './components/wishList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
    console.log('this.state looks like', this.state);
  }

  componentWillMount() {
    console.log('component mounting');
    this.beerRun();
  }

  search (term) {
    console.log('term looking like', term);
    axios.post('http://localhost:3000/brews', {
      q: term
    })
    .then(function (res) {
      console.log('res from server', res)
    })
    .catch(function (error) {
      console.log('error in post', error);
    });
    console.log('succesful post from client');
  }

  markAsSampled(item) {
    // console.log('what item looks like in markAsSampled ', item.sampled);
    //item.sampled = true
    console.log('item in markAsSampled', item)
    axios.post('http://localhost:3000/brews', { a: item })
    .then(response => {
      console.log('res from server in markAsSampled', response)
    });
    // .catch(function (err) {
    //   console.log('error in markAsSampled', error)
    // });

    console.log('success in markAsSampled');
  }

  beerRun() {
    axios.get('http://localhost:3000/brews')
    .then(response => {
      let collection = [];
      console.log('response.data in beer run ', response.data);
      response.data.map((beer) => {
        if (beer.sampled === false) {
          collection.push(beer);
        }
      })
      this.setState( { beers: collection });
      console.log('Getting some beer! setting state to ', collection)
    })
    .catch(err => console.log('party foul!', err));
  }


  render() {
    return (<div>
        <h1> Search Beers </h1>
        <WishList beers={this.state.beers} mark={this.markAsSampled.bind(this)}/>
        <Search onSearch={this.search.bind(this)}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));