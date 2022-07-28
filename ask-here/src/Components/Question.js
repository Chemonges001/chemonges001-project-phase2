import React, {useState} from 'react'
import { FaTimes } from "react-icons/fa"
import Answer from './Answer'

function Question({question, onDelete}) {

  const [answers, setAnswers] =useState("")

    const addAnswer = async (answer) =>{
      const res = await fetch ('http://localhost:4000/questions', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(answer)
      })
  
      const data = await res.json()
      setAnswers([data, ...answers])
  
    }

  
  return (
    <div className='question'>
        <h3 className='quiz'>{question.quiz} {' '}
           <FaTimes style ={{color:"red", cursor:"pointer"}}
           onClick={() =>onDelete (question.id)}/>
        </h3>
        <h4>Category: {question.category}</h4>
        <Answer onAdd={addAnswer}/>

    </div>
  )
}

export default Question
