type Props = {
    defaultText: string,
    accentText?: string,
    className?: string,
}

const Heading = ({ defaultText, accentText, className }:Props) => {
    return (
        <h1 className={`text-alc-gray text-center mx-auto text-2xl md:text-4xl lg:max-w-[50%] font-bold ${className}`}>
            {defaultText}
            <span className="text-alc-primary">{accentText}</span>
        </h1>    
    );
};

export default Heading;

