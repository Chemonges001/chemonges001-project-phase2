import React, { useState } from 'react'


function Answer({onAdd}) {
  const [answer, setAnswer] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd( { answer } )
    setAnswer('')
  }


  return (
    <div className ="form-control" onSubmit={onSubmit}>
          <label className='label-form'>Answers:</label>
          <input type='text' placeholder='Add an answer'value ={answer} onChange ={(e)=>
          setAnswer(e.target.value)}
          />
          <button type='submit'>Reply</button>
        </div> 
  )
}

export default Answer