import {FaTrash, FaPen} from 'react-icons/fa';

function TodoItem({todo, index, deleteTodo, toggleBtn}){
    return(
        
        <div style={{textDecoration : todo.done ? 'line-through' : 'none'}}>
            {todo.text}
            <button onClick={() => toggleBtn(index)}><FaPen /></button>
            <button onClick={() => deleteTodo(index)}><FaTrash /></button>
        </div>

        
    )
}

export default TodoItem;