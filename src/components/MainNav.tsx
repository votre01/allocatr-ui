import MainNavLink from "./MainNavLink";
import { Button } from "./ui/button";
import SearchBar from "./SeachBar";
import NavIcons from "./NavIcons";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <span className="flex items-center">
            <MainNavLink link={"/"} title={"Explore"} />
            <MainNavLink link={"/"} title={"Post a task"} />
            <MainNavLink link={"/"} title={"Become an allocat"} />
            <SearchBar placeholderText="Find a pro..."/>
            {isAuthenticated ? (
                <NavIcons />
            ) : (
                <span>
                    {/* <MainNavLink link={"/"} title={"Log in"} /> */}
                    <Button
                        variant={"link"}
                        className="mx-1 text-alc-light-gray bg-transparent focus:outline-none no-underline"
                        onClick={ async () => await loginWithRedirect() }    
                    >Log in</Button>
                    <Button
                        variant={"outline"}
                        className="mx-1"
                        onClick={ async () => await loginWithRedirect() }    
                    >Sign up</Button>
                </span>
            )}
        </span>
    );
};

export default MainNav;