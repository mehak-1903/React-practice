import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("../pages/Home.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Dashboard = lazy(() => import("../pages/Dashboard.jsx"));

export default function LazyLoad(){
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>

    </nav>

    <Suspense fallback={<h2>Loading...</h2>}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        }/>
    </Routes>
    </Suspense>
    </BrowserRouter>
}