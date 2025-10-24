import React from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <input
        {...register('name', { required: 'Name is required'})} 
        placeholder='Enter your name.'/>
        <br/>
        {errors.name && <p>{errors.name.message}</p>}

        <label>Email: </label>
        <input 
        {...register('email', {required: 'Name is required', pattern: { value : /^\S+@\S+$/i, message: 'Invalid email.'}})} 
        placeholder='Enter your email.'/><br/>
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Click Me</button>
    </form>
  )
}

export default MyForm