import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {    
    email: string;
    auth0Id: string;
};

export const useCreateV1User = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createV1UserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/v1/users/auth`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "content-type": "application/json"            
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to create new user")
        }
    };

    const {
        mutateAsync: createUser,
        isLoading,
        isError,
        isSuccess,
    } = useMutation(createV1UserRequest)

    return {
        createUser,
        isLoading,
        isError,
        isSuccess
    };
};