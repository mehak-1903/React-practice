import { useState } from 'react';
import './App.css';
import Step1 from './components/Step1.jsx';
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';

function App() {
  // Step: user kis page pr hai (1, 2 ya 3)
  const [step, setStep] = useState(1);

  // formData: user ke input store karne ke liye
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  // Step forward(next)
  const nextStep = () => setStep((prev) => prev + 1); 

  // Step backward(previous)
  const prevStep = () => setStep((prev) => prev - 1);

  // when user change his input
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  // yeh function decide krega konsa step show ho
  const renderStep = () => {
    switch(step){
      case 1:
        return (<Step1 formData = {formData} handleChange = {handleChange} nextStep = {nextStep}/>);
      case 2:
        return (<Step2 formData = {formData} handleChange = {handleChange} nextStep = {nextStep} prevStep = {prevStep}/>);
      case 3:
        return (<Step3 formData = {formData} prevStep = {prevStep}/>);
      default:
        return <Step1 />
    }
  }

  return (
    <>
    <h2>Multistep Form.</h2>
    {renderStep()}
    </>
  )
}

export default App
