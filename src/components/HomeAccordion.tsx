import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from "react-router-dom";

const HomeAccordion = () => {
   return (
    <Accordion className="text-alc-gray text-lg" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-transparent focus:outline-none">Certified and experienced</AccordionTrigger>
        <AccordionContent className="flex flex-col text-lg text-light">
          Allocats bring qualifications and years of experience, and unmatched expertise
          span
          <Link 
            to="/"
            className="text-alc-sky-blue font-normal text-sm underline hover:text-alc-sky-blue/80 transition-colors duration-200"
          >
            How to become an allocat
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="bg-transparent focus:outline-none">Specialized experts</AccordionTrigger>
        <AccordionContent className="flex flex-col text-lg text-light">
          Allocats bring qualifications and years of experience, and unmatched expertise
          span
          <Link 
            to="/"
            className="text-alc-sky-blue font-normal text-sm underline hover:text-alc-sky-blue/80 transition-colors duration-200"
          >
            How to become an allocat
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="bg-transparent focus:outline-none">Reliable and trustworthy</AccordionTrigger>
        <AccordionContent className="flex flex-col text-lg text-light">
          Allocats bring qualifications and years of experience, and unmatched expertise
          span
          <Link 
            to="/"
            className="text-alc-sky-blue font-normal text-sm underline hover:text-alc-sky-blue/80 transition-colors duration-200"
          >
            How to become an allocat
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="bg-transparent focus:outline-none">Efficient and cost effective</AccordionTrigger>
        <AccordionContent className="flex flex-col text-lg text-light">
          Allocats bring qualifications and years of experience, and unmatched expertise
          span
          <Link 
            to="/"
            className="text-alc-sky-blue font-normal text-sm underline hover:text-alc-sky-blue/80 transition-colors duration-200"
          >
            How to become an allocat
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
   );
};

export default HomeAccordion;
