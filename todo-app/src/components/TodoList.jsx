import { FaTrash } from "react-icons/fa";

function TodoList({todos, deleteTodo}){
    return(
        <>
        {todos.map((todo, index) => {
            return (<div key={index}>
                {todo}
                <button onClick = {() => deleteTodo(index)}><FaTrash /></button>
            </div>)
        })}
        </>
    )
}

export default TodoList;
