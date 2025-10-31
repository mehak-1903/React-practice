import React, { useState } from 'react'
import {useFormik} from 'formik';

async function checkUsernameAvailability(username){
    await new Promise((resolve) => 
    setTimeout(resolve), 2000);

    return username.toLowerCase() !== 'mehak'; 
}

function AsyncFormValidation() {
    const [checking, setChecking] = useState(false);
    const formik = useFormik({
        initialValues: { username : ""},
        validate: async (values) => {
            const errors = {};

            if(!values.username){
                errors.username = "Username is required";
            }else {
                setChecking(true);
                const isAvailable = await checkUsernameAvailability(values.username);
                setChecking(false);

                if(isAvailable){
                    errors.username = "Username already taken."
                }
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
        <label>Username: </label>
        <input type="text"
        name='username'
        placeholder='Enter username here.' 
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        {checking && <p>Checking availability...</p>}
        {formik.errors.username && <p>{formik.errors.username}</p>}<br/>
        <button type="submit" disabled={checking}>Click Me</button>
    </form>
    </>
  )
}

export default AsyncFormValidation