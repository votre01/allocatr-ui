

{/*type Props = {
    logoIcon: string,
    subHeader: string,
    cardHeader: string,
    cardImage: string,
    description: string,
    btnTitle: string,
    btnColor: string,
    className?: string
}

const CalloutCard = ({ logoIcon, subHeader, cardHeader, cardImage, description, btnTitle, btnColor, className }: Props) => {
    return (
        <div className={`flex bg-alc-primary p-8 items-center rounded-3xl sm:justify-between sm:px-12 sm:py-16 sm:max-w-6xl ${className}`}>
            <div className="  text-white text-center sm:text-left">
                <span className=" flex flex-col items-center sm:flex-row sm:text-left">
                    <img src={logoIcon} alt="Allocatr icon" className="w-16 px-2 sm:w-20"/>
                    <p className="font-bold">{subHeader}</p>
                </span>
                <h1 className="text-xl font-bold py-4 sm:text-2xl md:text-4xl">{cardHeader}</h1>
                <img src={cardImage} alt="Allocatr icon" className="max-w-90 px-2 sm:hidden" />
                <p className="font-light sm:text-xl py-4">{description}</p>
                <Button className={`mt-4 px-8 bg-${btnColor} hover:bg-${btnColor}/80 text-alc-primary sm:justify-left`}>
                    {btnTitle}
                </Button>
            </div>
            <img src={cardImage} alt="Allocatr icon" className="px-2 hidden sm:block sm:max-w-[50%]" />
        </div>
    );
};

// border-alc-sky-blue

export default CalloutCard;*/}

import { Button } from "./ui/button";
import classNames from "classnames";

type Props = {
  logoIcon: string;
  subHeader: string;
  cardHeader: string;
  cardImage: string;
  description: string;
  btnTitle: string;
  btnColor?: "alc-primary" | "alc-secondary" | "alc-sky-blue" | "red" | "green" | "yellow"; // Example of Tailwind colors
  className?: string;
};

const CalloutCard: React.FC<Props> = ({
  logoIcon,
  subHeader,
  cardHeader,
  cardImage,
  description,
  btnTitle,
  btnColor = "blue", // Default color
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex bg-alc-primary p-8 items-center rounded-3xl sm:justify-between sm:px-12 sm:py-16 sm:max-w-6xl",
        className
      )}
    >
      {/* Left Content */}
      
      <div className="text-white text-center sm:text-left">
        {/* Icon and Subheader */}
        <span className="flex flex-col items-center sm:flex-row sm:text-left">
          <img
            src={logoIcon}
            alt={`${subHeader} icon`}
            className="w-16 px-2 sm:w-20"
          />
          <p className="font-bold">{subHeader}</p>
        </span>

        {/* Header */}
        <h1 className="text-xl font-bold py-4 sm:text-2xl md:text-4xl">
          {cardHeader}
        </h1>

        {/* Mobile Image */}
        <img
          src={cardImage}
          alt={`${cardHeader} visual`}
          className="max-w-90 px-2 sm:hidden"
        />

        {/* Description */}
        <p className="font-light sm:text-xl py-4">{description}</p>

        {/* Button */}
        <Button
          className={classNames(
            "mt-4 px-8 text-alc-primary sm:justify-left",
            `bg-${btnColor}-500 hover:bg-${btnColor}-600`
          )}
        >
          {btnTitle}
        </Button>
      </div>

      {/* Desktop Image */}
      <img
        src={cardImage}
        alt={`${cardHeader} visual`}
        className="px-2 hidden sm:block sm:max-w-[50%]"
      />
    </div>
  );
};

export default CalloutCard;