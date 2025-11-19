import React from 'react'
import C from './C'

function B({increment, decrement, count}) {
  return (
    <div>
        <h3>B</h3>
        <C increment={increment} decrement={decrement} count={count}/>
    </div>
  )
}

export default B