import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
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

  beerRun() {
    axios.get('http://localhost:3000/brews')
    .then(response => {
      this.setState( { beers: response.data });
      console.log('Getting some beer! setting state to ', response)
    })
    .catch(err => console.log('party foul!', err));
  }


  render() {
    return (<div>
        <h1> Search Beers </h1>
        <Search onSearch={this.search.bind(this)}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));