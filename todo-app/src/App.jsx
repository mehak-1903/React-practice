import { useState } from "react";
import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";

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
      {/* Adding todos */}
      <AddTodo input={input} handleInput={handleInput} addBtn={addBtn} />

      {/* Pass Todos to todo list */}
      <TodoList todos = {todos} deleteTodo = {deleteTodo} toggleBtn = {toggleBtn}/>
    </>
  )
}

export default App;