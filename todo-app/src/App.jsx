import { useState } from "react";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  // Add Task Function.
  function addBtn(){
    // Don't add an empty input.
    if(input.trim() === "") return;
    // Creates a new Array with old todos + new input
    setTodos([...todos, {text: input, done: false}]);
    // Clear input field.
    setInput("");
  }

  // Delete Task.
  function deleteTodo(index){
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos)
  }

  // Toggle Task.
  function toggleBtn(index){
    const updatedDoneTodos = todos.map((todo, i) => {
      if(i === index){
        return {...todo, done: !todo.done}
      }
      return todo;
    });
    setTodos(updatedDoneTodos);
  }

  function handleInput (e){
    setInput(e.target.value);
  }
  return (
    <>
      <input type="text" placeholder="Enter your task here." value={input} onChange={handleInput}/><br/>
      <button onClick={addBtn}>Add Button.</button>

      {/* Pass Todos to todo list */}
      <TodoList todos = {todos} deleteTodo = {deleteTodo} toggleBtn = {toggleBtn}/>
    </>
  )
}

export default App;