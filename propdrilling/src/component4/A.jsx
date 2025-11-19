import React from 'react'
import B from './B'

function A({name, handleChange}) {
  return (
    <div>
        <h4>A</h4>
        <B name={name} handleChange={handleChange}/>
    </div>
  )
}

export default A