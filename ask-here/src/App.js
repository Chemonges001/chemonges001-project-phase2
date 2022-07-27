import React,{useState} from "react";
// import { FaTask } from "react-icons/fa";
import Header from "./Components/Header";
import QuestionForm from "./Components/QuestionForm";
import Questions from "./Components/Questions";

function App() {
  const [showAddQuestions, setShowAddQuestions] = useState(false)
  const [questions, setQuestions] =useState([])
      // add question
  const addQuestion =(question) =>{
    const id = Math.floor(Math.random() * 1000) +1
    const newQuestion ={id, ...question}
    setQuestions([newQuestion, ...questions])

  }
  
      //delete question 
  const deleteQuestion = (id) =>{
    setQuestions(questions.filter((question) => question.id !== id ))
    // console.log('delete', id)

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
