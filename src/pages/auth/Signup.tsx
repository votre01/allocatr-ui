import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/google.svg"
import Logo from "@/assets/allocatr-dark.svg"
import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <section className="flex flex-col h-screen mx-auto max-w-md justify-center space-y-4 text-alc-gray px-8 lg:mx-0">
                <img src={Logo} alt="allocatr" width={82} className="mx-auto py-2 hover:text-white lg:mx-0 lg:mb-12" />
                <span className="space-y-1 text-center lg:text-left">
                    <h1 className="font-bold text-xl text-alc-primary">Create your account</h1>
                    <legend>
                        Already have an account?
                        <Link
                            to="/" 
                            className="text-alc-primary hover:text-alc-primary/80 transition-colors duration-200"> Log in
                        </Link>
                    </legend>
                </span>
                <span className="space-y-1">
                    <Button variant="outline" className="w-full border-alc-gray/80 text-alc-gray/80 hover:border-alc-gray/60 hover:text-alc-gray/60">
                        <img src={GoogleIcon} width={20} /> Continue with Google
                    </Button>
                    <legend>
                        Or with email and password
                    </legend>
                </span>            
                <form className="space-y-4 py-6">
                    <Input placeholder="Email address" />
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                    <Input type="password" placeholder="Password" />                    
                    <div className="flex flex-col space-x-2">
                        <span className="flex items-center space-x-2">
                            <Input id="hireAccount" type="checkbox" className="border border-2 rounded-lg w-5" />
                            <label
                                htmlFor="hireAccount"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I'm here to work
                            </label>
                        </span>
                        <span className="flex items-center space-x-2">
                            <Input id="workAccount" type="checkbox" className="border border-2 rounded-lg w-5" />
                            <label
                                htmlFor="workAccount"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I'm here to hire
                            </label>
                        </span>
                    </div>                              
                </form>
                <span>
                    <Button variant="primary" className="w-full lg:w-[90px]">
                        Sign up
                    </Button>
                </span>
        </section>
    );
};

export default Signup;