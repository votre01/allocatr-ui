import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  placeholderText: string
}

export function SearchBar({ placeholderText }:Props) {
  return (
    <div className="relative w-64 mx-4">
      <span className="absolute inset-y-0 left-3 flex items-center text-white">
        <Search className="h-4 w-4" />
      </span>
      <Input
        type="text"
        placeholder={placeholderText}
        className="w-full bg-alc-gray placeholder:text-alc-light-gray/60 text-alc-light-gray pl-10 border-none"
      />
    </div>
  );
}
export default SearchBar;