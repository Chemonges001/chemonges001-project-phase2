import React from 'react'

function Question({question}) {
  return (
    <div className='question'>
        <h3>{question.quiz}</h3>
        <h4>Category: {question.category}</h4>
        <p>Answer: {question.answer}</p>

    </div>
  )
}

export default Question