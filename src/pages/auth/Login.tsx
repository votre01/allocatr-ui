import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/google.svg"
import Logo from "@/assets/allocatr-neg-dark.svg"
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <section className="flex flex-col h-screen justify-center space-y-4 text-alc-gray px-8">
                <img src={Logo} alt="allocatr" width={82} className="mx-auto py-6 hover:text-white sm:mx-0 sm:mb-16" />
                <span className="space-y-1 text-center sm:text-left">
                    <h1 className="font-bold text-xl text-alc-primary">Log in to allocatr</h1>
                    <legend>
                        Don't have an account?
                        <Link
                            to="/" 
                            className="text-alc-primary hover:text-alc-primary/80 transition-colors duration-200"> Sign up
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
                    <Input type="password" placeholder="Password" />
                </form>
                <Button variant="primary">
                    Login
                </Button>
        </section>
    );
};

export default Login;