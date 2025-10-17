import { Navigate } from "react-router-dom"
import { Auth } from "../pages/Auth"

export default function ProtectedRoute( { children }){
    if(!Auth.isAuthenticated){

        return <Navigate to="/login" replace/>
    }
    return children;
}