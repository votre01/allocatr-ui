import MainNavLink from "./MainNavLink";
import { Button } from "./ui/button";
import SearchBar from "./SeachBar";
import{ User } from "@/types/user";
import NavIcons from "./NavIcons";

type Props = {
    user: User
}

const MainNav = ({user}: Props) => {

    return (
        <span className="flex items-center">
            <MainNavLink link={"/"} title={"Explore"} />
            <MainNavLink link={"/"} title={"Post a task"} />
            <MainNavLink link={"/"} title={"Become an allocat"} />
            <SearchBar placeholderText="Find a pro..."/>
            {user ? (
                <NavIcons />
            ) : (
                <span>
                    <MainNavLink link={"/"} title={"Log in"} />
                    <Button className="mx-1" variant={"outline"}>Sign up</Button>
                </span>
            )}
        </span>
    );
};

export default MainNav;