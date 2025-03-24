import Header from "@/components/Header";
import HeroIntro from "@/components/HeroIntro";
import { ShowerHead } from "lucide-react";

type Props = {
    children: React.ReactNode;
    showHero?: boolean;
}

const Layout = ({ children, showHero=false }: Props) => {    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {showHero && <HeroIntro />}
            <div className=" flex-1">{children}</div>
        </div>
    );
};

export default Layout;