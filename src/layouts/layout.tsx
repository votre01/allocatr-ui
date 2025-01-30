import Header from "@/components/Header";
import HeroIntro from "@/components/HeroIntro";

type Props = {
    children: React.ReactNode,
}

const Layout = ({ children }: Props) => {    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <HeroIntro />
            <div className=" flex-1">{children}</div>
        </div>
    );
};

export default Layout;