import React from 'react'
import Question from './Question'

function Questions({ questions, onDelete }) {
    
  return (
    <div>
        {questions.map((question) =>(
            <Question key={question.id} question={question}
            onDelete={onDelete}
            />

        ))}
    </div>
  )
}

export default Questions