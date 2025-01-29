import CalloutCard from "./CalloutCard";
import { Button } from "./ui/button";
import logoIcon from "@/assets/icon-variant-01.svg";
import computer from "@/assets/laptop-and-phone.svg"

const HeroIntro = () => {
    return (
        <div className="bg-alc-light-gray/20">
            <div className="container flex flex-col items-center mx-auto py-8 px-2 md:px-4 md:py-12 lg:p-16">
                <h1 className="text-alc-gray text-center text-2xl sm:text-4xl lg:text-5xl font-bold">
                    Find the purr-fect experts on a single, powerful platform designed
                    <span className="text-alc-primary"> for seamless task execution</span>
                </h1>
                <p className="text-alc-gray text-center font-light lg:text-2xl py-4">
                    Connect with experts who bring expertise, agility, and results to every task
                </p>
                <Button variant="outline" className="px-24 py-6 mt-4 md:mt-12 text-alc-primary border-alc-primary focus:outline-none">
                    Get started
                </Button>
                <CalloutCard className="my-12"
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