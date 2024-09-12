import React from 'react'

function MoviesData({data}) {
  const {img,name,rating,description,watch} = data
  return (
    <li>
    <div>
    <img src= {img} alt="" width="40%" height="40%" />
  </div>
  <h2>NAME: {name}</h2>
  <h3>IMDB Rating : {rating}</h3>
  <p>{description}</p>
  <a href={watch} target="_blank">
    <button>Watch Now</button>
  </a>
  </li>
  )
}

export default MoviesData