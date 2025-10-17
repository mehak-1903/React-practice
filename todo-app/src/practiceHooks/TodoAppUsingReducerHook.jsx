import { useReducer, useState } from "react";

function reducer(state, action){
    switch(action.type){
        case "Add_todo" : return [...state, {id: new Date(), text: action.payload}];
        case "Remove_todo": return state.filter((todo) => todo.id !== action.payload);
        default: return state;
    }
}

export default function TodoAppUsingReducerHook() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [input, setInput] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if(input.trim()){
            dispatch({type: "Add_todo", payload: input});
            setInput("");
        }
    }
    return (
        <>
        <h2>Todo App using UseReducer Hook.</h2>
        <form onSubmit={handleAdd}>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Enter Task" />
            <button type="submit">Add</button>
        </form>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}
                <button onClick={() => dispatch({type: "Remove_todo", payload: todo.id})}>Delete</button>
                </li>
                
            ))}
        </ul>
        </>
    )
}