import { Link, Outlet } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/team">Team</Link> | <Link to="/company">Company</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Outlet />
        </nav>
        </>
    )
}