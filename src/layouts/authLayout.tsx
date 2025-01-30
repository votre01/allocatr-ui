type Props = {
    children: React.ReactNode,
}

const AuthLayout = ({ children }:Props) => {
    return (
        <section className="bg-alc-light-gray/20 justify-between md:flex md:max-w-6xl md:items-center md:mx-auto md:max-h-6xl">
                <section className="bg-alc-primary sm:h-full sm:py-80 px-80"></section>
                <section className="w-full">{children}</section>
        </section>
    );
};

export default AuthLayout