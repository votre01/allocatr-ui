import { Link } from "react-router-dom";
import Logo from "@/assets/allocatr-neg-light.svg"
import MainNavLink from "./MainNavLink";
import { Button } from "./ui/button";
import SearchBar from "./SeachBar";


const Header = () => {
    return (
        <div className="bg-black py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={Logo} alt="" width={120} />
                </Link>

                <span className="flex items-center">
                    <MainNavLink link={"/"} title={"Explore"}></MainNavLink>
                    <MainNavLink link={"/"} title={"Post a task"}></MainNavLink>
                    <MainNavLink link={"/"} title={"Become an allocat"}></MainNavLink>
                    <SearchBar />
                    <Button className="mx-1"variant={"primary"}>Log in</Button>
                    <Button className="mx-1" variant={"outline"}>Sign up</Button>
                </span>            
            </div>
        </div>
    );
};

export default Header;