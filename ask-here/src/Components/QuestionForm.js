import React, {useState} from 'react'

function QuestionForm({onAdd}) {
  const [quiz, setQuiz] = useState('')
  const [category, setCategory] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()

    if(!quiz){
      alert('Please Add Quiz')
      return
    }
    onAdd( {quiz, category, } )
    setQuiz ('')
    setCategory('')
    
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className ="form-control">
          <label className='label-form'>Questions</label>
          <input type='text' placeholder='Add a question' value ={quiz} onChange ={(e)=>
          setQuiz(e.target.value)}
          />
        </div>
        <div className ="form-control">
          <label className='label-form'>Category</label>
          <input type='text' placeholder='Add category' value ={category} onChange ={(e)=>
          setCategory(e.target.value)}/>
        </div>
      
        <input type= 'submit'  value = 'Save Question' className='btn btn-block'/>
    </form>
  )
}

export default QuestionForm