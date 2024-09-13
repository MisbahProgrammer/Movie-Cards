import moviesData from "../api/moviesData.json"
import MoviesData from "./MoviesData";
const Cards = () => {
    return(
    <ul className="grid grid-cols-3  w-full">
            {moviesData.map((currElm) =>{
                return(
              <MoviesData key={currElm.id} data ={currElm}/>
                )
            })}   
          
  
        </ul>
    )
  }

  export default Cards;