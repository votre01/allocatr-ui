import MainNavLink from "./MainNavLink";
import { Button } from "./ui/button";
import SearchBar from "./SeachBar";

const MainNav = () => {

    return (
        <span className="flex items-center">
            <MainNavLink link={"/"} title={"Explore"}></MainNavLink>
            <MainNavLink link={"/"} title={"Post a task"}></MainNavLink>
            <MainNavLink link={"/"} title={"Become an allocat"}></MainNavLink>
            <SearchBar placeholderText="Find a pro..."/>
            <Button className="mx-1"variant={"primary"}>Log in</Button>
            <Button className="mx-1" variant={"outline"}>Sign up</Button>
        </span>
    );
};

export default MainNav;