import React, {useState} from 'react'


function Answer({onAdd}) {
  const [answer, setAnswer] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd( { answer } )
    setAnswer('')
  }
  return (
    <div className ="form-control">
          <label>Answers</label>
          <input type='text' placeholder='Add an answer'value ={answer} onChange ={(e)=>
          setAnswer(e.target.value)}
          />
          <button onSubmit={onSubmit}>Reply</button>
        </div> 
  )
}

export default Answer