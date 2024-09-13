import React from 'react'

function MoviesData({data}) {
  const {img,name,rating,description,watch} = data
  return (
    <li className='border p-4 m-4 rounded-lg shadow-sm flex flex-col justify-between'>
    <div>
    <img src= {img} alt="" width="100%" height="100%" />
  </div>
  <h2>NAME: {name}</h2>
  <h3>IMDB Rating : {rating}</h3>
  <p className='w-full'>{description}</p>
  <a href={watch} target="_blank" className='border py-4 px-6 bg-pink-700 rounded-lg align-bottom text-center'>
    <button className='font-bold text-white'>Watch Now</button>
  </a>
  </li>
  )
}

export default MoviesData