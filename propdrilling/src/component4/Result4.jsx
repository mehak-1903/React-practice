import React, { useState } from 'react'
import A from './A'

function Result4() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }
  return (
    <div>
        <h3>Prop Drilling Task 3</h3>
        <A name={name} handleChange={handleChange}/>
    </div>
  )
}

export default Result4