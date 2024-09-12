import React, { useState } from "react"
import './introduce.css';
import Dropdown from "../../components/dropdown/Dropdown"
import { useNavigate } from "react-router-dom";

const Introduce  = () => {
    const difficulty = ["easy","medium","hard"]
    const[difficultyChange, setDifficultyChange] = useState('')
    const navigate= useNavigate();
    const TOTAL_QUESTIONS = 10

    console.log("difficultyChange",difficultyChange)

    const startQuiz =() =>{
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
        }
    }

    return(
        <div className='introduce'>
            <div className='introduce-container'>
                 <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
                 <img className='introduce-img' src="https://thetrainingarcade.com/wp-content/uploads/2020/06/Trivia-logo-01-1024x473.png"></img>
                 <div onClick={startQuiz} className='introduce-btn'>Quiz'e Başla</div>
            </div>
        </div>
    )
}

export default Introduce