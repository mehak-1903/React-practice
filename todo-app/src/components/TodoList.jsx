import TodoItem from './TodoItem.jsx';

function TodoList({todos, deleteTodo, toggleBtn}){
    return(
        <>
        {todos.map((todo, index) => (
            <TodoItem 
            key={index}
            todo = {todo}
            index = {index}
            deleteTodo = {deleteTodo}
            toggleBtn = {toggleBtn}
            />
        ))}
        </>
    )
}

export default TodoList;