import React from 'react'
import B from './B'

function A({user}) {
  return (
    <div>
        <h1>A</h1>
        <B user={user}/>
    </div>
  )
}

export default A