import React from 'react'
import Question from './Question'
import {Link} from 'react-router-dom'

function Questions({ questions, onDelete }) {
    
  return (
    <div>
        {questions.map((question) =>(
            <Question key={question.id} question={question}
            onDelete={onDelete}
            /> 

        ))}
        < Link className ='back-btn'to = '/'>Back</Link>
    </div>
  )
}

export default Questions