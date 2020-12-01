import React from 'react';
import Rating from 'react-rating';


function Stars(props) {

    const starDifficulty = (difficulty) => {

        let rating = 0;

        if(difficulty === 'easy'){
            rating = 1;

        }
        else if(difficulty === 'medium'){
            rating = 2;
        }
        else if(difficulty === 'hard'){
            rating = 3;
        }
        else{
            rating = 0;
        }
        return rating;
    }

    return (
        <div>
            <h1>Questions {(props.questionNo +1)} of  {props.totalquestions}</h1>
            <p>Entertainment: Board Games </p>
            <Rating   
                initialRating={starDifficulty(props.difficulty)} 
                readonly/>
        </div>
    );
}

export default Stars;
