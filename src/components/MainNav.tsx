import MainNavLink from "./MainNavLink";
import { Button } from "./ui/button";
import SearchBar from "./SeachBar";

const MainNav = () => {

    return (
        <span className="flex items-center">
            <MainNavLink link={"/"} title={"Explore"} />
            <MainNavLink link={"/"} title={"Post a task"} />
            <MainNavLink link={"/"} title={"Become an allocat"} />
            <SearchBar placeholderText="Find a pro..."/>
            <MainNavLink link={"/"} title={"Log in"} />
            <Button className="mx-1" variant={"outline"}>Sign up</Button>
        </span>
    );
};

export default MainNav;