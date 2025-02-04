import { Link } from "react-router-dom";
import Logo from "@/assets/allocatr-neg-light.svg"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import MainNavLink from "./MainNavLink";
import NavIcons from "./NavIcons";
import { useAuth0 } from "@auth0/auth0-react";



const Header = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div className="sticky top-0">
            <div className="bg-black py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} alt="" width={120} />
                    </Link>
                    {/* Mobile Nav */}
                    <div className="lg:hidden flex items-center">
                        {
                            isAuthenticated ? (
                                <NavIcons/>                                
                            ) : (
                                <MainNavLink link={"/"} title={"Log in"} />
                            )
                        }
                        <MobileNav />            
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