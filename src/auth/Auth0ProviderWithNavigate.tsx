import { useCreateV1User } from "@/api/UserApiV1";
import {AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
    children: React.ReactNode
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const { createUser } = useCreateV1User();

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId || !redirectUri) {
        throw new Error("unable to initialize auth");
    }

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        if (user?.sub, user?.email) {
            createUser({ email:user.email, auth0Id:String(user.sub) });
        }
        console.log("USER", user);
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )

};

export default Auth0ProviderWithNavigate;