import AccountMenuLink from "./AccountMenuLink";
import AccountAvatar from "./AccountAvatar";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./ui/dropdown-menu"
import {
    LockKeyhole,
    LogOut,
    Power,
    ReceiptText,
    UserRoundPen,
} from "lucide-react";



const AccountMenu = () => {
    const { logout } = useAuth0();
    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent focus:outline-none p-0">
            <AccountAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-alc-light-gray/60" />
            <DropdownMenuItem><Power /><AccountMenuLink link="/" title="Switch mode"/></DropdownMenuItem>
            <DropdownMenuItem><UserRoundPen /><AccountMenuLink link="/profile" title="Profile"/></DropdownMenuItem>
            <DropdownMenuItem><LockKeyhole /><AccountMenuLink link="/" title="Security"/></DropdownMenuItem>
            <DropdownMenuItem><ReceiptText /><AccountMenuLink link="/" title="Billing & subscriptions"/></DropdownMenuItem>
            <DropdownMenuSeparator className="bg-alc-light-gray/60" />
            <DropdownMenuItem>
                <Button
                    variant="outline"
                    className="focus:outline-none border-none py-1 text-alc-red hover:text-alc-red/80 text-left p-0"
                    onClick={() => logout()}
                >
                    <LogOut />Log out
                </Button>
            </DropdownMenuItem>
            

        </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountMenu;