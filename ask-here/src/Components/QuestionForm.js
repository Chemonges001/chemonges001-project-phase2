import React, {useState} from 'react'

function QuestionForm() {
  const [quiz, setQuiz] = useState('')
  const [category, setCategory] = useState('')
  const [answer, setAnswer] = useState('')
  return (
    <form className='add-form'>
        <div className ="form-control">
          <label>Questions</label>
          <input type='text' placeholder='Add a question' value ={quiz} onChange ={(e)=>
          setQuiz(e.target.value)}
          />
        </div>
        <div className ="form-control">
          <label>Category</label>
          <input type='text' placeholder='Add category' value ={category} onChange ={(e)=>
          setCategory(e.target.value)}/>
        </div>
        <div className ="form-control">
          <label>Answers</label>
          <input type='text' placeholder='Add an answer'value ={answer} onChange ={(e)=>
          setAnswer(e.target.value)}
          />
        </div>
        <input type= 'submit'  value = 'Save Question' className='btn btn-block'/>
    </form>
  )
}

export default QuestionForm