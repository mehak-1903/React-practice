import React, { useState } from 'react'

function Step2({formData, handleChange, prevStep, nextStep}) {
    const [error, setError] = useState("");

    const handleNext = () => {
        if(!formData.email.includes('@')){
            setError("Please enter a valid email.");
            return;
        }
        if(formData.password.length < 6){
            setError("Password must be at least 6 characters!");
            return;
        }
        setError("");
        nextStep();
    }
  return (
    <div>
        <h2>Step2: Account Info.</h2>
        <input type="text" placeholder='Enter Email.' name = "email" value={formData.email} onChange={handleChange} /><br/>
        <input type="password" placeholder='Enter Password.' name='password' value={formData.password} onChange={handleChange}/>
        {error && <p style={{color: 'red'}}>{error}</p>}<br /><br/>
        <button onClick={prevStep}>Back</button><br/><br />
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Step2