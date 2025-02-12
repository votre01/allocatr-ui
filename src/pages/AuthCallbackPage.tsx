import { useCreateV1User } from "@/api/UserApiV1";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser } = useCreateV1User();

    const hasCreatedUser = useRef(false);

    useEffect(() => {
        if (user?.sub, user?.email && !hasCreatedUser.current) {
            createUser({ email:String(user?.email), auth0Id:String(user?.sub) });
            hasCreatedUser.current = true;
        }
        navigate("/");
    }, [createUser, navigate, user]);

    return <>Loading...</>;
};

export default AuthCallbackPage;