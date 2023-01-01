import React from "react";
import {useState, useEffect } from "react";
import MovieCard from "./MovieCard";

//c62a2e9d

const API_URL='http:www.omdpapi.com?/apikey=c62a2e9d';

const Movie1={
  "Title":"Amazing Spiderman Syndrome",
  "year":"2012",
  "imdbID":3020300,
  "Type":"Movie",
  "poster":"N/A"
}

const App=()=>{
const [movies, setMovies]=useState([]);
const [searchTerm, setSearchTerm]=useState('');


  const searchMovies=async(title)=>{ 
     const response=await fetch(`${API_URL}&s=${title}`);
     const data=await response.json();
     setMovies(data.Search);
  }

  useEffect(()=>{

    searchMovies('Spiderman');


  },[]);

  return(
    <div>
    <h1>Movieland</h1>
    <div className="Search">
    <input placeholder="search for Movie" value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}/>
    {/* <img src={SearchIcon} alt="search" onClick={()=>searchMovies{searchTerm}}/> */}
    </div>

    {
      movies.length > 0?(
        <div className="container">
          {movies.map((movie)=>{

       <MovieCard Movie={movie}/>

          })}
    
        </div>
      ):(
        <div className="empty">
          <h2>no Movies found</h2>

        </div>
      )
    }

   
    </div>
    

  );
}

export default App;

// import { useState, useEffect } from 'react';
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
 

// const App=()=>{  
//   const [Counter, setCounter]=useState(0)
//   useEffect(()=>{

//     setCounter(100);
    
//   },[])
//     return (
     
//       <div className="App">
//        <button onClick={()=>setCounter((prevCount)=>prevCount -1)}>-</button>
//        <h1>{Counter}</h1>
//        <button onClick={()=>setCounter((prevCount)=>prevCount +1)}>+</button>    
//       </div>
//     );
  
// }

// export default App;
