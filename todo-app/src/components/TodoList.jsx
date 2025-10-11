

function TodoList({todos}){
    return(
        <>
        {todos.map((todo, index) => {
            return (<div key={index} className="display:flex; justify-content: space-between;">
                {todo}
            </div>)
        })}
        </>
    )
}

export default TodoList;
