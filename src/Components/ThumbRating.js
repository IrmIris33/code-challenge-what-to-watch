import React from 'react';

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