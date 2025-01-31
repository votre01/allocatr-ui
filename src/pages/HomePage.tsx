import HomeAccordion from "@/components/HomeAccordion";
import logoIcon from "@/assets/icon-variant-01.svg";
import logoIcon2 from "@/assets/icon-variant-02.svg";
import computerImage from "@/assets/laptop-and-phone.svg"
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import InfoCard from "@/components/InfoCard";
import CalloutCard  from "@/components/CalloutCard";
import MasonryGrid from "@/components/MasonryGrid";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto text-alc-gray px-4 mt-16">
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
                            <img src={logoIcon2} alt="allocatr icon" width={60} className="mx-auto px-2 md:mx-0"/>
                            <span>
                                <h3 className="font-bold">Looking to offer your skills?</h3>
                                <p className="text-sm">Join our team of allocats</p>
                                <Button className="mt-4 focus:outline-none focus:ring-0" variant={'green'}>Become an allocate</Button>                            
                            </span>                        
                        </div>                    
                    </div>            
                </div>
                <div className="mx-auto flex flex-col mt-16 px-4 max-w-4xl md:justify-center">
                    <h3 className="text-2xl font-bold py-6">
                        No job is too small or too big
                    </h3>
                    <p className="text-sm mb-12 md:text-sm md:max-w-xl">
                    Whether its a quick fix or a major project, every task matters. From simple jobs to complex endeavors, allocatr is the right place to connect with skilled professionals.
                    </p>
                    <MasonryGrid />                   
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
                    Plan, assign, and track tasks effortlessly while keeping your team connected and your projects on schedule.
                    </p>
                    <CalloutCard className="my-12 mx-auto"
                        logoIcon={logoIcon}
                        subHeader="Project management tools"
                        cardHeader="Powerful tools to simplify your project management"
                        cardImage={computerImage}
                        description="Seamless collaboration and streamlined workflows ensure everything stays organized."
                        btnTitle="Learn more"
                    />                  
                </div>
                
                <div className="my-16 px-4">
                    <Heading
                        defaultText="Team Builder - "
                        accentText="Assemble and manage with ease"
                    />
                    <p className="text-alc-gray text-center font-light lg:text-2xl py-4">
                        Big projects need the right team, and allocatr’s Team Builder makes it simple.
                    </p>
                    <div className="flex flex-col gap-12 mt-6 text-sm md:justify-center md:items-center md:flex-row">                
                        <div className="text-center md:max-w-[40%] md:text-left">
                            <p>
                            Use allocatr's Team Builder to pick skilled allocats for every aspect of your project. Team Builder also lets you handpick your team
                            </p>
                            <Button className="mt-12 focus:outline-none focus:ring-0" variant={'green'}>Become an allocate</Button>                                       
                        </div>
                        <div className="md:max-w-[40%]">
                            <div className="bg-alc-light-gray p-24 rounded-lg">Team builder graphis here</div>
                        </div>            
                    </div>                
                </div>
            </div>
            <div className="flex flex-col border-t border-alc-light-gray items-center text-center text-alc-gray space-y-6 py-16 px-4 mt-16 bg-alc-light-gray/20 lg:space-y-12">
                <Heading
                    defaultText="Thousands of people and businesses "
                    accentText="trust allocatr"
                />
                <p className="text-sm lg:max-w-4xl md:text-lg">
                Whether its a quick fix or a major project, every task matters. From simple jobs to complex endeavors, allocatr is the right place to connect with skilled professionals.
                </p>
                <Button variant="green" className="focus:outline-none px-12 py-4 md:px-24 md:py-6 md:text-lg">
                    Join now
                </Button>
            </div>
        </>
    );
};

export default HomePage;