import React from 'react'
import A from './A'

function Result2() {
    const user = {
        name: 'Mehak',
        role: 'Frontend Developer'
    }
  return (
    <div>
        <h1>Prop Drilling Task 1</h1>
        <A user={user}/>
    </div>
  )
}

export default Result2