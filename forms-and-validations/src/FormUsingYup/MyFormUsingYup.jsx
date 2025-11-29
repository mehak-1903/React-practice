import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    firstName : yup.string().required("First name is required."),
    lastName : yup.string().required("Last Name is required."),
    email : yup.string().email("Invalid format.").required("Email is required."),
    phone : yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits.").required("Phone number is required.")
  }).required();

function MyFormUsingYup() {  
  const {register, handleSubmit, formState: {errors}, reset} = useForm({ resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted successfully!!!");
    reset();
  }

  return (
    <div>
        <h2>MyFormUsingYup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>  
          <label>First Name: </label>
          <input type="text" placeholder="Enter your first name here." {...register("firstName")} />
          <p>{errors.firstName?.message}</p>

          <label>Last Name: </label>
          <input type="text" placeholder="Enter your last name here." {...register("lastName")} />
          <p>{errors.lastName?.message}</p>

          <label>Email ID: </label>
          <input type="text" placeholder="Enter your email here." {...register("email")}/>
          <p>{errors.email?.message}</p>

          <label>Phone Number: </label>
          <input type="text" placeholder="Enter your contact number here." {...register("phone")}/>
          <p>{errors.phone?.message}</p>

          <button onClick={onSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default MyFormUsingYup