import React,{ useState, useEffect } from "react";
// import { FaTask } from "react-icons/fa";
import Header from "./Components/Header";
import QuestionForm from "./Components/QuestionForm";
import Questions from "./Components/Questions";

function App() {
  const [showAddQuestions, setShowAddQuestions] = useState(false)
  const [questions, setQuestions] =useState([])

  useEffect(() => {

    const getQuestions = async () => {
      const questionsFromServer = await fetchQuestions()
      setQuestions(questionsFromServer)
    }
   
    getQuestions()
  }, [])
  const fetchQuestions = async() => {
    const res = await fetch("http://localhost:4000/questions")
    const data = await res.json()

    return data
  }

      // add question
  const addQuestion = async (question) =>{
    const res = await fetch ('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(question)
    })

    const data = await res.json()
    setQuestions([data, ...questions])

  }
  
      //delete question 
  const deleteQuestion = async (id) =>{
    await fetch (`http://localhost:4000/questions/${id}`, {
      method:'DELETE',
    })
    setQuestions(questions.filter((question) => question.id !== id ))

  }
  return (
    <div className="container">
      <Header onAdd={() =>setShowAddQuestions(!showAddQuestions)}
      showAdd={showAddQuestions}
      title="AsKit, Get Answers"/> 
      {showAddQuestions && <QuestionForm onAdd ={addQuestion}/>}
      <Questions questions={questions} 
      onDelete ={deleteQuestion}
      />
    </div>
  );
}

export default App;
