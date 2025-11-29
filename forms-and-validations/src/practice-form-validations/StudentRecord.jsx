// build form validation mini project.
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function StudentRecord() {
    const [submittedData, setSubmittedData] = useState(null);
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
      setSubmittedData(data);
      reset();
    };
  return (
    <div>
        <h2>StudentRecord Mini Project</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name: </label>
            <input
            {...register('fname', {required: 'First name is required.', minLength: {value: 3, message: 'Atleast 3 characters.'}})}/>
            {errors.fname && <p>{errors.fname.message}</p>}<br/>

            <label>Last Name: </label>
            <input 
            {...register('lname', {required: 'Last name is required.', minLength: {value: 3, message: 'Atleast 3 characters.'}})}/>
            {errors.lname && <p>{errors.lname.message}</p>}<br/>

            <label>Father Name: </label>
            <input 
            {...register('fatherName', {required: 'Father name is required.', minLength: {value: 3, message: 'Atleast 3 characters.'}, maxLength: {value: 15, message: 'Not more than 15 characters.'}})}/>
            {errors.fatherName && <p>{errors.fatherName.message}</p>}<br/>

            <label>Mother Name: </label>
            <input
            {...register('mName', {required: 'Mother name is required.', minLength: {value: 3, message: 'Atleast 3 characters.'}, maxLength: {value: 15, message: 'Not more than 15 characters.'}})}/>
            {errors.mName && <p>{errors.mName.message}</p>}<br/>
            

            <label>Phone Number: </label>
            <input
            {...register('number', {required: 'Phone number is required.', pattern: {value: /^[0-9]{10}$/, message: 'Phone number must be 10 digits'}})}/>
            {errors.number && <p>{errors.number.message}</p>}<br/>

            <button type='submit'>Submit</button>

        </form>
            {submittedData && (
              <div>
                <h3>Form submitted successfully!!!</h3>
              </div>
            )}
    </div>
  )
}

export default StudentRecord