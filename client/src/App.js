import React from "react";
import "./App.css";
//components
import InputTodo from "./components/InputTodo";
import EditTodo from "./components/EditTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        
        <ListTodos />
      </div>
    </>
  );
}

export default App;
