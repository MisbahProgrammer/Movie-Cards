import React from 'react'

function MoviesData(props) {
  return (
    <li>
    <div>
    <img src= {props.currElm.img} alt="" width="40%" height="40%" />
  </div>
  <h2>NAME: {props.currElm.name}</h2>
  <h3>IMDB Rating : {props.currElm.rating}</h3>
  <p>{props.currElm.description}</p>
  <a href={props.currElm.watch} target="_blank">
    <button>Watch Now</button>
  </a>
  </li>
  )
}

export default MoviesData