import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
    console.log('this.state looks like', this.state);
  }


  render() {
    return (
      <div>
        <h1> Search Beers </h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));