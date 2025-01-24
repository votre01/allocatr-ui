import { Link } from "react-router-dom";
import Logo from "@/assets/allocatr-neg-light.svg"
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { Button } from "./ui/button";


const Header = () => {
    return (
        <div className="bg-black py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={Logo} alt="" width={120} />
                </Link>
                {/* Mobile Nav */}
                <div className="lg:hidden flex items-center">
                    <Button className="mx-1"variant={"primary"}>Log in</Button>
                    <MobileNav />            
                </div>
                {/* Main Nav */}
                <div className="hidden lg:block">                    
                    <MainNav />                
                </div>            
            </div>            
        </div>        
    );
};

export default Header;