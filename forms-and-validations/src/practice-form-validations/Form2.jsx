import React from 'react'
import { useForm } from 'react-hook-form'

function Form2() {
    const { register, handleSubmit, formState : {errors} }= useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div>
        <h2>Form Validation</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input 
            {...register('name', {required: "Name is required."})}/>
            {errors.name && <p>{errors.name.message}</p>}<br/>
            
            <label>Email: </label>
            <input 
            {...register('email', {required: "Email is required.", pattern: {value: /^\S+@\S+$/i, message: 'Invalid email.'}})}/>
            {errors.email && <p>{errors.email.message}</p>}<br/>

            <label>Password: </label>
            <input 
            {...register('password', {required: 'Password is required.', minLength: {value: 5, message: 'Atleast 5 characters.'}})}/>
            {errors.password && <p>{errors.password.message}</p>}<br/>

            <button>Submit</button>

        </form>
    </div>
  )
}

export default Form2