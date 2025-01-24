import { Menu } from "lucide-react";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
    SheetDescription
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger className="bg-transparent focus:outline-none">
                <Menu className="text-alc-light-gray hover:text-alc-light-gray/80 animate-colors duration-200"/>
            </SheetTrigger>
            <SheetContent className="bg-alc-light-gray border-none space-y-3">                        
                <SheetTitle className="text-alc-gray">
                    <span>Welcome to allocatr</span>                    
                </SheetTitle>
                <Separator className="bg-alc-gray/10"/>
                <SheetDescription className="flex">
                    <Button variant="primary" className="flex-1 border-none focus:outline-none">Log In</Button>                
                </SheetDescription>
            </SheetContent>        
        </Sheet>
    );
};

export default MobileNav;
