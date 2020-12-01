import React , {useState} from 'react';
import './App.css';
import questions from './Data/questions.json';
import Stars from './Components/Stars';
import Questions from './Components/Questions';
import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {

  const [score ,setScore] = useState(); 
  const [next ,setNext] = useState(false);
  const [step, setStep] = useState(0);

  
  const checkScore = (answer,correctAnswer)=>{

    if(answer === correctAnswer){
      setScore({score : score+1});
    }
  }

  const increaseStep = () => {
    if (step < 20) {
      setStep(step + 1)
    }
    else{
      console.log('completed');
      setStep(0)
    }
  }


  return (
    <div className="container mt-5">
          <>
          <ProgressBar now={step} min={0} max={20} />
          <Stars 
            difficulty ={questions[step].difficulty} 
            questionNo ={step} 
            totalquestions ={questions.length}  />
          <Questions 
            question={questions[step]}
            check={checkScore} 
            increaseStep={increaseStep}/>
      </>
    
    </div>
  );
}

export default App;
