import HomeAccordion from "@/components/HomeAccordion";
import logoIcon from "@/assets/icon-variant-01.svg";
import computerImage from "@/assets/laptop-and-phone.svg"
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import InfoCard from "@/components/InfoCard";
import CalloutCard  from "@/components/CalloutCard";
import GridCollage from "@/components/GridCollage";

const HomePage = () => {
    return (
        <div className="container mx-auto text-alc-gray px-4">
            <div className=" flex flex-col gap-12 text-sm md:justify-center md:items-center md:flex-row">
                <div className="md:max-w-[40%]">
                    <HomeAccordion />
                </div>
                <div className="text-center md:max-w-[40%] md:text-left">
                    <h2 className="text-2xl font-bold mb-4 md:text-4xl">
                        About a <span className="text-alc-primary">cat</span>
                    </h2>
                    <p>
                    An allocat is not your typical feline lounging in the sun. This sleek and skilled creature is a seasoned expert, drawing on years of experience. Allocats are the go-to pros on allocatr, springing into action faster than you can say "catnap"! They're anything but lazy, unless you count the occasional victory stretch after a job well done.
                    </p>

                    <div className="flex flex-col text-center mt-12 md:flex-row md:items-start md:text-left">
                        <img src={logoIcon} alt="allocatr icon" width={60} className="mx-auto p-2 md:mx-0"/>
                        <span>
                            <h3 className="font-bold">Looking to offer your skills?</h3>
                            <p className="text-sm">Join our team of allocats</p>
                            <Button className="mt-4" variant={'green'}>Become an allocate</Button>                            
                        </span>                        
                    </div>                    
                </div>            
            </div>
            <div className="mt-16">
                <Heading 
                    defaultText="I can't think of a title for the header right now"
                    accentText=" but I’ll think of something"
                />
                <p className="text-alc-gray text-center font-light lg:text-2xl py-4">
                    Connect with experts who bring expertise, agility, and results to every task
                </p>
                <span className="flex flex-col items-center justify-center gap-6 py-12 sm:flex-row">
                    <InfoCard
                        header="Lorem ipsum dolor"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
                    />
                    <InfoCard
                        header="Lorem ipsum dolor"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
                    />
                    <InfoCard
                        header="Lorem ipsum dolor"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
                    />
                </span>
            </div>
            <div className="mt-16 ">
                <Heading 
                    defaultText="Manage projects"
                    accentText=" seamlessly"
                />
                <p className="text-alc-gray text-center font-light lg:text-2xl py-4">
                    Connect with experts who bring expertise, agility, and results to every task
                </p>
                <CalloutCard className="my-12 mx-auto"
                    logoIcon={logoIcon}
                    subHeader="Project management tools"
                    cardHeader="Powerful tools to simplify your project management"
                    cardImage={computerImage}
                    description="Seamless collaboration and streamlined workflows ensure everything stays organized."
                    btnTitle="Learn more"
                    btnColor="red" 
                />                  
            </div>
            <div className="my-16 px-4">
                <h3 className="text-2xl font-bold md:text-4xl py-6">
                    No job is too small or too big
                </h3>
                <p className="max-w-[80%] text-sm md:max-w-[60%] md:text-lg">
                Whether its a quick fix or a major project, every task matters. From simple jobs to complex endeavors, allocatr is the right place to connect with skilled professionals.
                </p>
                <span>
                    <GridCollage />    
                </span>                
            </div>
        </div>
    );
};

export default HomePage;