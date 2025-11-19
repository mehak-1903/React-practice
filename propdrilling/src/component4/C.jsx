import React from 'react'
import D from './D'

function C({name, handleChange}) {
  return (
    <div>
        <h4>C</h4>
        <input type="text" value={name} placeholder='Enter name here' onChange={handleChange}/>
        <D name={name}/>
    </div>
  )
}

export default C