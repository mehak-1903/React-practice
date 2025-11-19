import React, { useState } from 'react'
import A from './A';

function Result3() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
  return (
    <div>
        <h4>Task 2</h4>
        <A increment={increment} decrement={decrement} count={count}/>
    </div>
  )
}

export default Result3