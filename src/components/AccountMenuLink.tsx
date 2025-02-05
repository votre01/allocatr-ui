import { Link } from "react-router-dom";

type Props = {
    link: string,
    title: string,
    className?: string
}

const AccountMenuLink = ({ link, title, className }: Props) => {
    return (
        <Link
            to={link}
            className={`font-normal text-black hover:text-alc-gray text-nowrap transition-colors duration-200, ${className}`} 
        >
            {title}
        </Link>
    );
};

export default AccountMenuLink;