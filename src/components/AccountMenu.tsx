import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "./ui/dropdown-menu"
import AccountMenuLink from "./AccountMenuLink";
import AccountAvatar from "./AccountAvatar";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const AccountMenu = () => {
    const { logout } = useAuth0();
    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent focus:outline-none p-0">
            <AccountAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><AccountMenuLink link="/profile" title="Profile"/></DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Button
                    variant="red"
                    className="flex flex-1 focus:outline-none py-1 "
                    onClick={() => logout()}
                >
                    Logout
                </Button>
            </DropdownMenuItem>
            

        </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountMenu;