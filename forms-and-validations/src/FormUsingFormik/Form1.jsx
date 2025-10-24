import { useFormik } from 'formik';

function Form1() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        onSubmit: (values) => console.log(values),
        validate: (values) => {
            const errors= {};
            if(!values.name){
                errors.name = "Name is required"
            }
            if(!values.email){
                errors.email = "Email is required"
            }else if(!/^\S+@\S+\.\S+$/.test(values.email)){
                errors.email = "Email is required"
            }
            return errors;
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <label>Name: </label>
        <input type="text"
        placeholder='Enter your name'
        name='name'
        value={formik.name}
        onChange={formik.handleChange} /><br/>
        {formik.errors.name && <p>{formik.errors.name}</p>}

        <label>Email: </label>
        <input type="text"
        name='email'
        value={formik.email}
        onChange={formik.handleChange}
        placeholder='Enter your email' /><br/>
        {formik.errors.email && <p>{formik.errors.email}</p>}

        <button type="submit">Click Me</button>
    </form>
  )
}

export default Form1;