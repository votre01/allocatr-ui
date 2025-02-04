import { Menu } from "lucide-react";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
    SheetDescription,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import MainNavLink from "./MainNavLink";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNav = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger className="bg-transparent focus:outline-none">
                <Menu className="text-alc-light-gray hover:text-alc-light-gray/80 animate-colors duration-200"/>
            </SheetTrigger>
            
            <SheetContent className="bg-white border-none space-y-3">  
            <SheetTitle className="items-center text-alc-gray">
                <span><img src={"/allocatr-dark.svg"} width={84} alt="" /></span>                    
            </SheetTitle>                                 
                
                <Separator className="bg-alc-gray/10"/>
                <SheetDescription className="flex flex-col font-bold space-y-4">
                    <MainNavLink link="/" title="Explore" className="text-black" />
                    <MainNavLink link="/" title="Post a project" className="text-black" />
                    <MainNavLink link="/" title="Become an allocat" className="text-black" />
                    <Separator className="bg-alc-gray/10"/>
                    <Button
                        variant="primary"
                        className="flex-1 border-none focus:outline-none"
                        onClick={ async() => await loginWithRedirect() }
                    >
                            Log In
                        </Button>                
                </SheetDescription>
            </SheetContent>        
        </Sheet>
    );
};

export default MobileNav;
