import { useNavigate } from "react-router-dom";
import { Auth } from "./Auth";

export default function Login(){

    const navigate = useNavigate();

    function handleLogin(){
        Auth.login(() => {navigate("/dashboard")})
        
    }
    return(
        <>
        <h2>Login Page.</h2>
        <button onClick={handleLogin}>Login.</button>
        </>
    )
}