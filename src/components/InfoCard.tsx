type Props = {
    header: string,
    content: string,
    className?: string
}

const InfoCard = ({ header, content, className}:Props) => {
    return (
        <div className={`border border-alc-gray/40 border-t-8 border-t-alc-primary rounded-md px-6 py-12 text-center w-full sm:max-w-[260px] ${className}`}>
            <h3 className="py-6 font-bold text-alc-primary">{header}</h3>
            <p>{content}</p>
        </div>
    );
};

export default InfoCard;