import { Link } from "react-router-dom";
import Logo from "@/assets/allocatr-neg-light.svg"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import MainNavLink from "./MainNavLink";


const Header = () => {
    return (
        <div className="sticky top-0">
            <div className="bg-black py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} alt="" width={120} />
                    </Link>
                    {/* Mobile Nav */}
                    <div className="lg:hidden flex items-center">
                        <MainNavLink link={"/"} title={"Log in"} />
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