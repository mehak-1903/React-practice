import { useNavigate } from "react-router-dom"
import { Auth } from "./Auth";

export default function Dashboard(){
    const navigate = useNavigate();

    const handleLogout = () => {
        Auth.logout(() => { navigate("/")})
    }
    return(
        <>
        <h2>Dashboard Page.</h2>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}