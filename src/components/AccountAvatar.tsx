import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth0 } from "@auth0/auth0-react"

const AccountAvatar = () => {
    const { user } = useAuth0();
    return (
        <Avatar className="w-7 h-7">
            <AvatarImage src={user?.picture} />
            <AvatarFallback>{user?.given_name?.charAt(0)}</AvatarFallback>
        </Avatar>
    );
};

export default AccountAvatar;