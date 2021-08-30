import React from 'react';
import ThumbUp from '../Images/ThumbUp.png';
import ThumbDown from '../Images/ThumbDown.png';



const ThumbRating = ({ rating }) => {
    const thumbUpIcon = <img className='thumb-icon' src={ThumbUp} alt='thumbs up icon' /> 
    const thumbDownIcon = <img className='thumb-icon' src={ThumbDown} alt='thumbs down icon' /> 
 
    const ratingFeature = rating > 5 ? thumbUpIcon : thumbDownIcon
 
    return (
        <div>
            {ratingFeature}
        </div>
    );
};
 
export default ThumbRating;