type Props = {
    children: React.ReactNode,
}

const AuthLayout = ({ children }:Props) => {
    return (
            <section className="mx-auto bg-alc-light-gray/20 items-center justify-center lg:flex  lg:mx-auto">
                    <section className="lg:w-full lg:h-screen lg:bg-[url(/hero-signup.svg)] lg:bg-cover lg:bg-center lg:bg-no-repeat"></section>
                    <section className="w-full lg:max-w-[30%]">{children}</section>
            </section>
    );
};

export default AuthLayout;