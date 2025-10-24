// Using React Hook Form

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

        <label>Password: </label>
        <input
        {...register('password', { required: 'Password is required', minLength: {value: 6, message: 'Minimum 6 characters.'}, maxLength: {value: 15, message: 'Maximum 15 characters.'}})} 
        placeholder='Enter password here.' type='password'/><br/> 
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Click Me</button>
    </form>
  )
}

export default MyForm