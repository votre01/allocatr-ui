import { User } from "@/types/user";
import { Navigate } from "react-router-dom";

type Props = {
    user: User,
    children: React.ReactNode
}

const ProtectedRoutes = ({ user, children }:Props) => {
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;