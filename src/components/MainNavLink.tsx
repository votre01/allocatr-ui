import { Link } from "react-router-dom";

type Props = {
    link: string,
    title: string,
    className?: string
}

const MainNavLink = ({ link, title, className }: Props) => {
    return (
        <Link
            to={link}
            className={`font-normal text-alc-light-gray hover:text-alc-light-gray/80 text-nowrap px-4 transition-colors duration-200, className ${className}`} 
        >
            {title}
        </Link>
    );
};

export default MainNavLink;