type Props = {
    id: string,
    inputName?: string,
    labelText: string,
    className?: string,
} 

const Checkbox = ({id, inputName, labelText, className}:Props) => {
    return ( 
        <>
            <span className="flex items-center space-x-2">
                <input type="checkbox" id={id} name={inputName} className={`appearance-none rounded-sm h-4 w-4 cursor-pointer bg-alc-gray/40 text-white outline-none checked:bg-alc-green ${className}`} />
                <label htmlFor={id} className={` text-sm ${className}`}>{labelText}</label>
            </span>
        </>
    );    
};

export default Checkbox;