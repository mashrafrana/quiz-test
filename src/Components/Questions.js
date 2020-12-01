import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import {  shuffle } from 'lodash'
import Score from './Score';

function Questions(props) {

    const [showScore , setShowScore] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [options, setOptions] = useState();
    const [correctScore, setCorrectScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        shuffleAnswers();
    }, [props.question])


    const checkAnswer = (answer)=>{
        console.log(answer, 'sdfsdf')
        setShowScore(true);
        setDisabled(true);
        if(answer === props.question['correct_answer'])
        {
            setIsCorrect(true);
            setCorrectScore(correctScore + 1)
        } else {
            setIsCorrect(false);
            setWrongScore(wrongScore + 1)
        }
    }

    const nextStep = () => {
        setShowScore(false);
        setIsCorrect(false);
        setDisabled(false);
        props.increaseStep()
    }

    const shuffleAnswers = () => {
        const allAnswers = [...props.question['incorrect_answers'], props.question['correct_answer']]
        const shuffledAnswers = shuffle(allAnswers);
        setOptions(shuffledAnswers)

    }

    return (
        <div >
            <div >
            <h4>{ decodeURIComponent(props.question['question'])}</h4>
            <div className="row align-center">
            {options && options.map(incorrectAnswer=>{
                    return(<button className="m-3 w-25 col-4"  style={ disabled && incorrectAnswer === props.question['correct_answer'] ? { backgroundColor: "black", color: "white" } : null } disabled={disabled} onClick={()=>{
                        checkAnswer(incorrectAnswer);
                    }} >{decodeURIComponent(incorrectAnswer)}</button> );
                })
            }
            </div>
            </div>

            {showScore ? 
             <div className="text-center mr-5">
                    <h1>{isCorrect ? 'Correct' : 'Sorry' } </h1>
                    <button onClick={()=> nextStep()} >Next Question</button>
            </div>
            :null}
            <Score  correctScore={correctScore} wrongScore={wrongScore}/>
          
        </div>
    );
}

export default Questions;
