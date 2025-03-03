import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth0 } from "@auth0/auth0-react"

type Props = {
    className?: string
}

const AccountAvatar = ({className}: Props) => {
    const { user } = useAuth0();
    return (
        <Avatar className={`w-7 h-7 ${className}`}>
            <AvatarImage src={user?.picture} />
            <AvatarFallback>{user?.given_name?.charAt(0)}</AvatarFallback>
        </Avatar>
    );
};

export default AccountAvatar;