import CalloutCard from "./CalloutCard";
import { Button } from "./ui/button";
import logoIcon from "@/assets/icon-variant-01.svg";
import computer from "@/assets/laptop-and-phone.svg"

const HeroIntro = () => {
    return (
        <div className="bg-alc-light-gray/20">
            <div className="container flex flex-col items-center space-y-8 mx-auto py-8 px-2 md:px-4 md:py-12 md:space-y-16 lg:p-16">
                <span className="space-y-4">
                    <h1 className="text-alc-gray text-center text-2xl sm:text-4xl lg:text-5xl font-bold">
                    Find the purr-fect experts on a single, powerful platform designed
                    <span className="text-alc-primary"> for seamless task execution</span>
                </h1>
                <p className="text-alc-gray text-center font-light lg:text-2xl">
                    Connect with experts who bring expertise, agility, and results to every task
                </p>
                </span>
                <Button variant="green" className="focus:outline-none px-12 py-4 md:px-24 md:py-6 md:text-lg">
                    Join now
                </Button>
                <CalloutCard
                    logoIcon={logoIcon}
                    subHeader="Lost time is so last season"
                    cardHeader="
                        We line up skilled pros so fast you'll think time's on your side
                    "
                    cardImage={computer}
                    description="Allocatr connects you with skilled experts and professionals for tasks of any size."
                    btnTitle="Post a project"                  
                />
            </div>
        </div>
    );
};

export default HeroIntro;