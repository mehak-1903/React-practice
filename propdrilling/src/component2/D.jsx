import React from 'react'

function D({user}) {
  return (
    <div>
        <h1>D</h1>
        <p><strong>Name: {user.name}</strong></p>
        <p><strong>Role: {user.role}</strong></p>

    </div>
  )
}

export default D