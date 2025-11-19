import React from 'react'
import C from './C'

function B({name, handleChange}) {
  return (
    <div>
        <h4>B</h4>
        <C name={name}  handleChange={handleChange}/>
    </div>
  )
}

export default B