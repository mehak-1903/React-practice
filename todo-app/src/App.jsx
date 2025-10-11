import { useState } from "react";
import TodoList from "./components/TodoList.jsx";
import { FaTrash } from 'react-icons/fa';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function addBtn(){
    // Don't add an empty input.
    if(input.trim() === "") return;
    // Creates a new Array with old todos + new input
    setTodos([...todos, input]);
    // Clear input field.
    setInput("");
  }

  function deleteTodo(index){
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos)
  }

  function handleInput (e){
    setInput(e.target.value);
  }
  return (
    <>
      <input type="text" placeholder="Enter your task here." value={input} onChange={handleInput}/><br/>
      <button onClick={addBtn}>Add Button.</button>

      {/* Pass Todos to todo list */}
      <TodoList todos = {todos} deleteTodo = {deleteTodo}/>
    </>
  )
}

export default App;