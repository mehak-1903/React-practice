import React from 'react'
import B from './B'

function A({increment, decrement, count}) {
  return (
    <div>
        <h3>A</h3>
        <B increment={increment} decrement={decrement} count={count}/>
    </div>
  )
}

export default A