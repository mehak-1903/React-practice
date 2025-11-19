import React from 'react'
import D from './D'

function C({increment, decrement, count}) {
  return (
    <div>
        <h3>C</h3>
        <button onClick={increment}>Increment</button><br/>
        <button onClick={decrement}>Decrement</button>
        <D count={count}/>
    </div>
  )
}

export default C