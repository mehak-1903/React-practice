import { FaPen, FaTrash } from "react-icons/fa";

function TodoList({todos, deleteTodo, toggleBtn}){
    return(
        <>
        {todos.map((todo, index) => {
            return (<div key={index} style={{textDecoration : todo.done ? 'line-through' : 'none'}}>
                {todo.text}
                <button onClick={() => toggleBtn(index)}><FaPen /></button>
                <button onClick = {() => deleteTodo(index)}><FaTrash /></button>
            </div>)
        })}
        </>
    )
}

export default TodoList;