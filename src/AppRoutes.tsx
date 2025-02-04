import Layout from "./layouts/layout";
import AuthLayout from "./layouts/authLayout"
import { Routes, Route, Navigate }  from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const AppRoutes = () => {    
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />  
            <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
            <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout> } />
            <Route path="/dashboard" element=<span>DASHBOARD</span> />
            <Route path="/profile" element=<span>PROFILE PAGE</span> />
            <Route path="*" element={<Navigate to="/" />} /> {/* Replace with 404 not found page route*/}
        </Routes>
    );
};

export default AppRoutes;