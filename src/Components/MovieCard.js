import React from 'react';
import '../CSS/Card.css';
import { Card } from 'react-bootstrap';
import ThumbRating from './ThumbRating';


const MovieCard = ({ Poster, Title, Plot, Released, imdbRating}) => {

    return (
        <div className='container-card'>
            <Card className='card-item'>
                <div className='movie-card'>
                    <img className='poster' width='250' src={Poster} alt='title'></img>
                    <h4>{Title}</h4>
                    <p>{Plot}</p>
                
                <div className='container-rating'></div>
                    <p>Release Date: ({Released})</p>
                    <p>Rating: {imdbRating} / 10</p>
                    <ThumbRating rating={imdbRating} />

                </div>
            </Card>
            
        </div>
    );
};

export default MovieCard;
