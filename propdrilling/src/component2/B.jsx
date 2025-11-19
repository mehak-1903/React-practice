import React from 'react'
import C from './C'

function B({user}) {
  return (
    <div>
        <h1>B</h1>
        <C user={user}/>
    </div>
  )
}

export default B