import React from 'react';

const ul = {
  listStyle: 'none'
}

const styles = {
  color: 'orange',
  fontWeight: 'bold',
  fontFamily: 'Avenir'
}

const WishList = (props) => (
  <div style={styles}>
    <h4> Wish List </h4>
    Gotta try {props.beers.length} beers

    <ul>
    {props.beers.map((beer) => {

      return <li style={ul}key={beer.beerId}><a>{beer.beerName}</a> <button onClick={function(){props.mark(beer)}}>save</button> <button onClick={function(){props.description(beer)}}>get description</button></li>



    })}

    </ul>
  </div>
)

export default WishList;