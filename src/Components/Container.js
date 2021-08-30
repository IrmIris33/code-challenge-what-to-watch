import React, { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard';
import '../CSS/Container.css';
import { CardDeck } from 'react-bootstrap';


const Container = ({movieData, title, recentSearch}) => {
    const [currentMovie, setCurrentMovie] = useState([]);
    const [previousMovie, setPreviousMovie] = useState([]);
  
     useEffect(() => {
         setCurrentMovie(movieData)
         setPreviousMovie(previousMovie.concat(movieData))
     }, [movieData, previousMovie]);
  
     const listOfMovies = previousMovie.map((movie, i) => <MovieCard {...movie} key={i}/>)
  
     const singleMovies = <MovieCard {...currentMovie} />
  
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
  
 export default Container;