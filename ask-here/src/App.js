import React,{useState} from "react";
// import { FaTask } from "react-icons/fa";
import Header from "./Components/Header";
import QuestionForm from "./Components/QuestionForm";
import Questions from "./Components/Questions";

function App() {
  const [questions, setQuestions] =useState([
    {
        id: 1,
      category: "Mythology",
      quiz: "What was the punishment for Sysiphus' craftiness?",
      answer: "Cursed to roll a boulder up a hill for eternity.",
    },
    {
        id: 2,
      category: "Nature",
      quiz: "In aeronautics, flaps and slats are used to control what on an aircraft?",
      answer: "Lift",
      
    },
    {
        id: 3,
      category: "Computers",
      quiz: "What was the name of the security vulnerability found in Bash in 2014?",
      answer: "Shellshock",
      
    }
])

//delete question 
  const deleteQuestion = (id) =>{
    setQuestions(questions.filter((question) => question.id !== id ))
    // console.log('delete', id)

  }
  return (
    <div className="container">
      <Header title="AsKit, Get Answers"/>
      <QuestionForm/>
      <Questions questions={questions} 
      onDelete ={deleteQuestion}
      />
    </div>
  );
}

export default App;
