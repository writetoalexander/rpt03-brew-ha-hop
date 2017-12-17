import React from 'react';
import axios from 'axios';

const ul = {
  listStyle: 'none'
}

const styles = {
  color: 'DarkOrange',
  fontWeight: 'bold',
  fontFamily: 'Avenir'

}

class Sampled extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sampledBeers: []
    }
  }

  componentWillMount() {
    console.log('component in sampled mounting');
    this.listSampled();
  }

  // getDescription(item) {
  //   console.log (item);
  //   window.alert(item.beerDescription);

  // }

  listSampled() {
    console.log('inside listSampled');
    axios.get('http://localhost:3000/brews')
    .then(response => {
      let collection = [];
      console.log('response.data in listSampled ', response.data);
      response.data.map((beer) => {
        if (beer.sampled === true) {
          collection.push(beer);
        }
      })
      this.setState( { sampledBeers: collection });
    })
    .catch(err => console.log('party foul!', err));
    console.log('sampledBeers looks like', this.state.sampledBeers);
  }

  render() {
    return(<div style={styles}>
      <h3>List of Sampled Beers</h3>
      <ul>
        {this.state.sampledBeers.map((beer) => {

          return <li style={ul}key={beer.beerId}><a>{beer.beerName}</a></li>

        })}
      </ul>

    </div>
    )
  }

}
export default Sampled;