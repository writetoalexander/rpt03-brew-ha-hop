import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: ''
    }
  }


  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Try Something New!</h4>
      Search Beers: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}>
        Time For a Beer Run </button>
    </div>)
  }
}

  export default Search;

