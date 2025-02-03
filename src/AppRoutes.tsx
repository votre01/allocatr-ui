import Layout from "./layouts/layout";
import AuthLayout from "./layouts/authLayout"
import { Routes, Route, Navigate}  from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useEffect, useState } from "react";

const AppRoutes = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:5500/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": "true",
                },
            }).then(response => {
                if (response.status ===200)
                    return response.json();
                    throw new Error("Authentication failed");
            }).then(resObject => {
                setUser(resObject.user)
            }).catch (err => {
                console.log(err);
            });
        };
        getUser();
    }, []);

    console.log(user);
    
    return (
        <Routes>
            <Route path="/" element={<Layout user={user}><HomePage /></Layout>} />  
            <Route
                path="/login"
                element={user ? <Navigate to="/dashboard" /> : <AuthLayout><Login /></AuthLayout> }
            />
            <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout> } />
            <Route
                path="/dashboard"
                element={<ProtectedRoute user={user}><span>DASHBOARD</span></ProtectedRoute>}
            />
            {/* <Route
                path="/profile"
                element={<ProtectedRoute user={user}><span>PROFILE PAGE</span> </ProtectedRoute>}
            /> */}
            <Route
                path="/profile"
                element={<ProtectedRoute user={user}><span>PROFILE PAGE</span></ProtectedRoute>}
            />
            <Route path="*" element={<Navigate to="/" />} /> {/* Replace with 404 not found page route*/}
        </Routes>
    );
};

export default AppRoutes;