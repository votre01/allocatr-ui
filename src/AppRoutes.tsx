import Layout from "./layouts/layout";
import AuthLayout from "./layouts/authLayout"
import { Routes, Route, Navigate}  from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";

const AppRoutes = () => {

    const user = true;
    
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
                element={<ProtectedRoute user={user}><span>DASHBOARD</span></ProtectedRoute>} />
            <Route
                path="/profile"
                element={<ProtectedRoute user={user}><span>PROFILE PAGE</span> </ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Replace with 404 not found page route*/}
        </Routes>
    );
};

export default AppRoutes;