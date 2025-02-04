import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";



type Props = {
    children: React.ReactNode
}

const ProtectedRoutes = ({ children }:Props) => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;