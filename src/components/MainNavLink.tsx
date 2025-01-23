import { Link } from "react-router-dom";

type Props = {
    link: string,
    title: string
}

const MainNavLink = ({ link, title }: Props) => {
    return (
        <Link
            to={link}
            className="font-medium text-alc-light-gray hover:text-alc-light-gray/80 text-nowrap px-4 transition-colors duration-200" 
        >
            {title}
        </Link>
    );
};

export default MainNavLink;