import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/google.svg"
import Logo from "@/assets/allocatr-dark.svg"
import Info from "@/assets/circle-info-solid.svg"
import { Link } from "react-router-dom";
import Checkbox from "@/components/Checkbox";


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
                    <Button variant="outline" className="w-full border-alc-gray/80 text-alc-gray/80 hover:border-alc-gray/60 hover:text-alc-gray/60 focus:outline-none">
                        <img src={GoogleIcon} width={20} /> Continue with Google
                    </Button>
                    <legend className="text-sm text-alc-gray/60">
                        Or with email and password
                    </legend>
                </span>            
                <form >
                    <fieldset className="space-y-4 py-2">
                        <Input placeholder="Email address" />
                        <Input placeholder="First name" />
                        <Input placeholder="Last name" />
                        <Input type="password" placeholder="Password" />
                    </fieldset>
                    <fieldset className="space-y-0.4 mb-4">
                        <legend className="flex space-x-2 items-center text-[.8rem] py-2 font-bold">
                            <span>Select role</span>
                            <img src={Info} width={12} />
                        </legend>
                        <Checkbox id="account-type-work" labelText="I'm here to work" />                                
                        <Checkbox id="account-type-hire" labelText="I'm here to hire" />
                    </fieldset>                                  
                </form>
                <span>
                    <Button variant="primary" className="w-full lg:w-[90px] focus:outline-none">
                        Sign up
                    </Button>
                </span>
        </section>
    );
};

export default Signup;