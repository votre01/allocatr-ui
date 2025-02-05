import { Link } from "react-router-dom";
import Logo from "@/assets/allocatr-neg-light.svg"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import NavIcons from "./NavIcons";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";



const Header = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <div className="sticky top-0">
            <div className="bg-black py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} alt="" width={120} />
                    </Link>
                    {/* Mobile Nav */}
                    <div className="lg:hidden">
                        {
                            isAuthenticated ? (
                                <NavIcons/>                                
                            ) : (
                                <span className="flex items-center">
                                    <Button
                                        variant={"link"}
                                        className="mx-1 text-alc-light-gray bg-transparent focus:outline-none no-underline"
                                        onClick={ async () => await loginWithRedirect() }    
                                    >
                                        Log in
                                    </Button>
                                    <MobileNav />
                                </span>
                            )
                        }
                                    
                    </div>
                    {/* Main Nav */}
                    <div className="hidden lg:block">                    
                        <MainNav />                
                    </div>            
                </div>            
            </div>
        </div>        
    );
};

export default Header;