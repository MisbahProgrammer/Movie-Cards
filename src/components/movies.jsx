import moviesData from "../api/moviesData.json"
import MoviesData from "./MoviesData";
const Cards = () => {
    return(
    <ul>
            {moviesData.map((currElm) =>{
                return(
              <MoviesData key={currElm.id} data ={currElm}/>
                )
            })}   
          
  
        </ul>
    )
  }

  export default Cards;