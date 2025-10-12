export default function AddTodo({input, handleInput, addBtn}) {
    return(
        <div>
            <input type="text" placeholder="Enter your task here." value={input} onChange={handleInput}/><br/>
      <button onClick={addBtn}>Add Button.</button>
        </div>
    )
}