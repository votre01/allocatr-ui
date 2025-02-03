import { Navigate } from "react-router-dom";

type User = {
    id: string,
    name: string,
    email: string
    // role: "client" | "allocat" | "admin" ---- Uncomment when user table is created
}

type Props = {
    user: boolean,
    children: React.ReactNode
}

const ProtectedRoutes = ({ user, children }:Props) => {
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;