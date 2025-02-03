import Header from "@/components/Header";
import HeroIntro from "@/components/HeroIntro";
import { User } from "@/types/user";

type Props = {
    user: User
    children: React.ReactNode,
}

const Layout = ({ user, children }: Props) => {    
    return (
        <div className="flex flex-col min-h-screen">
            <Header user={user} />
            <HeroIntro />
            <div className=" flex-1">{children}</div>
        </div>
    );
};

export default Layout;