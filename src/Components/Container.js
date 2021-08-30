import React, { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard';
import '../CSS/Container.css';
import { CardDeck } from 'react-bootstrap';

//Section to display user's previous 3 searches.
const MovieContainer = ({movieData, title, recentSearch}) => {
    const [currentMovie, setCurrentMovie] = useState([]);
    const [previousMovie, setPreviousMovie] = useState([]);
  
     useEffect(() => {
         setCurrentMovie(movieData)
         setPreviousMovie(previousMovie.concat(movieData))
     }, [movieData, previousMovie]);
  
     const listOfMovies = previousMovie.map((movie, i) => <MovieCard {...movie} key={i}/>)
  
     const singleMovies = <MovieCard {...currentMovie} />
  
     //Rendering the same search 3 times. Test with conditional statement for each option, or local storage. Align card deck inline and resize.
     let renderMovie = () => (recentSearch === true) ? listOfMovies : singleMovies
  
     if(previousMovie.length > 3) {
         setPreviousMovie(previousMovie.splice(0, 1))
     }
     
     return ( 
         <div className="container-search">
             <CardDeck className='deck' inline="true">
                 <h3>{title}</h3>
                 {renderMovie()}
             </CardDeck>
         </div> 
     );
 };
  
 export default MovieContainer;