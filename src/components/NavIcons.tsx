import { Bell } from "lucide-react";
import AccountMenu from "./AccountMenu";
import ActionMenu from "./ActionMenu";

const NavIcons = () => {
    return (
        <span className=" flex items-center text-alc-light-gray space-x-4">
            <Bell/>
            <AccountMenu />
            <ActionMenu />
        </span>
    )
};

export default NavIcons;