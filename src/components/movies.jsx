import moviesData from "../api/moviesData.json"
const Cards = () => {
    return(
    <ul>
            {moviesData.map((currElm) =>{
                return(
                <li>
                <div>
                <img src= {currElm.img} alt="" width="40%" height="40%" />
              </div>
              <h2>NAME: {currElm.name}</h2>
              <h3>IMDB Rating : {currElm.rating}</h3>
              <p>{currElm.description}</p>
              <a href={currElm.watch} target="_blank">
                <button>Watch Now</button>
              </a>
              </li>
                )
            })}   
          
  
        </ul>
    )
  }

  export default Cards;