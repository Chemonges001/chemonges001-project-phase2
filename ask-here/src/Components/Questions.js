import React from 'react'
import Question from './Question'

function Questions({questions}) {
    
  return (
    <div>
        {questions.map((question) =>(
            <Question key={question.id} question={question}/>

        ))}
    </div>
  )
}

export default Questions