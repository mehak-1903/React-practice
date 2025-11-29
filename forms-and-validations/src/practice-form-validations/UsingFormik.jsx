import { useFormik } from 'formik'
import React, { useState } from 'react'

function UsingFormik() {
    const [submittedData, setSubmittedData] = useState(false);
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            fatherName: "",
            motherName: "",
            email: "",
            phoneNumber: ""
        },
        onSubmit : (values, {resetForm}) => {
            console.log(values);
            setSubmittedData(true);
            resetForm("");
            setTimeout(() => setSubmittedData(false), 3000);
        },
        validate: (values) => {
            const errors = {};
            if(!values.fname){
                errors.fname = 'First Name is required.'
            }
            if(!values.lname){
                errors.lname = 'Last name is required.'
            }
            if(!values.fatherName){
                errors.fatherName = 'Father name is required.'
            }
            if(!values.motherName){
                errors.motherName = 'Mother name is required.'
            }
            if(!values.email){
                errors.email = 'Email is required.'
            }else if(!/^\S+@\S+\.\S+$/.test(values.email)){
                errors.email = 'Invalid email id.'
            }
            if(!values.phoneNumber){
                errors.phoneNumber = 'Phone number must be required.'
            }else if(!/^[0-9]{10}$/.test(values.phoneNumber)){
                errors.phoneNumber = 'Only digits are required.'
            }else if(values.phoneNumber.length !== 10){
                errors.phoneNumber = 'Phone number must be of 10 digits';
            }
            return errors;
        }
    })
  return (
    <div>
        <h2>Using formik</h2>
        
        <form onSubmit={formik.handleSubmit}>
         <label>First Name: </label>
         <input 
         type='text'
         name='fname'
         value={formik.values.fname}
         onChange={formik.handleChange}/> 
         {formik.errors.fname && <p>{formik.errors.fname}</p>}<br/>

        <label>Last Name: </label>
         <input 
         type='text'
         value={formik.values.lname}
         name='lname'
         onChange={formik.handleChange}
         />
         {formik.errors.lname && <p>{formik.errors.lname}</p>}<br/>

         <label>Father Name: </label>
         <input 
         type='text'
         value={formik.values.fatherName}
         name='fatherName'
         onChange={formik.handleChange}/>
         {formik.errors.fatherName && <p>{formik.errors.fatherName}</p>}<br/>

         <label>Mother Name:</label>
         <input 
         type='text'
         name='motherName'
         value={formik.values.motherName}
         onChange={formik.handleChange}/>
         {formik.errors.motherName && <p>{formik.errors.motherName}</p>}<br/>

         <label>Email: </label>
         <input 
         type='text'
         name='email'
         value={formik.values.email}
         onChange={formik.handleChange}/>
         {formik.errors.email && <p>{formik.errors.email}</p>}<br/>

         <label>Phone Number: </label>
         <input
         name='phoneNumber'
         value={formik.values.phoneNumber}
         onChange={formik.handleChange}/>
         {formik.errors.phoneNumber && <p>{formik.errors.phoneNumber}</p>}<br/>

         <button type='submit'>Submit</button>
        </form>

        {submittedData && (<p style={{color: 'green', fontWeight: 'bold'}}>Submitted data successfully!!!</p>)}
    </div>
  )
}

export default UsingFormik