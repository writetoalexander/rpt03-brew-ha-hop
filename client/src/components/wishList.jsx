import React from 'react';

const WishList = (props) => (
  <div>
    <h4> Wish List </h4>
    Gotta try {props.beers.length} beers

    <ul>
    {props.beers.map((beer) => {

      return <li key={beer.beerId}><a>{beer.beerName}</a> <button onClick={function(){props.mark(beer)}}>save</button> <button onClick={function(){props.description(beer)}}>get description</button></li>



    })}

    </ul>
  </div>
)

export default WishList;