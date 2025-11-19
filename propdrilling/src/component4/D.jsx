import React from 'react'
import E from './E'

function D({name}) {
  return (
    <div>
        <h4>D</h4>
        <E name={name} />
    </div>
  )
}

export default D