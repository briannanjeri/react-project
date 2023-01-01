import React from "react";

const MovieCard=({Movie})=>{
    return(
        <div className="Movie">
        <div>
          <p>{Movie.year}</p>
        </div>

        <div>
          <img src={Movie.poster!=="N/A"? Movie.poster : 'https://via.placeholder.com/400'} 
          alt={Movie.Title}/>
        </div>

        <div>
          <span>{Movie.Type}</span>
          <h3>{Movie.Title}</h3>
        </div>

      </div>
    );
}
export default MovieCard
