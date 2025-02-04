import { Bell } from "lucide-react";
import AccountMenu from "./AccountMenu";

const NavIcons = () => {
    return (
        <span className=" flex items-center text-alc-light-gray space-x-4">
            <Bell/>
            <AccountMenu />
        </span>
    )
};

export default NavIcons;