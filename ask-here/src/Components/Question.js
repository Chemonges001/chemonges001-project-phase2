import React, {useState} from 'react'
import { FaTimes } from "react-icons/fa"
import Answer from './Answer'

function Question({question, onDelete}) {

  const [answers, setAnswers] =useState("")

  const addAnswer =(answer) =>{
    const id = Math.floor(Math.random() * 1000) +1
    const newAnswer ={id, ...answer}
    setAnswers([...answers, newAnswer])

  }
  return (
    <div className='question'>
        <h3>{question.quiz} {' '}
           <FaTimes style ={{color:"red", cursor:"pointer"}}
           onClick={() =>onDelete (question.i)}/>
        </h3>
        <h4>Category: {question.category}</h4>
        {/* <p>Answer: {question.answer}</p> */}
        <Answer onAdd={addAnswer}/>

    </div>
  )
}

export default Question
