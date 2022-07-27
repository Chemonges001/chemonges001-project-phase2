import React from 'react'
import { FaTimes } from "react-icons/fa"
import Answer from './Answer'

function Question({question, onDelete}) {
  return (
    <div className='question'>
        <h3>{question.quiz} {' '}
           <FaTimes style ={{color:"red", cursor:"pointer"}}
           onClick={() =>onDelete (question.i)}/>
        </h3>
        <h4>Category: {question.category}</h4>
        {/* <p>Answer: {question.answer}</p> */}
        <Answer/>

    </div>
  )
}

export default Question
