import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

export const useCreateV1User = () => {
    const createV1UserRequest = async (user: CreateUserRequest) => {
        const response = await fetch(`${API_BASE_URL}/api/v1/user`, {
            method: "POST",
            headers: {
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