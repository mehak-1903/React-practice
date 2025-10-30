import React, { useState } from 'react'

function Step1({formData, handleChange, nextStep}) {
    const [error, setError] = useState("");

    const handleNext = () => {
        if(!formData.name.trim()){
            setError("Name is required.");
            return;
        }
        setError("");
        nextStep();
    }
  return (
    <div>
        <h2>Step1: Personal Info.</h2>
        <input type="text" name='name' placeholder='Enter your name' value={formData.name} onChange={handleChange} />
        {error && <p style={{color: "red"}}>{error}</p>}<br/><br/>
        <button onClick={handleNext}>Next Button</button>
    </div>
  )
}

export default Step1