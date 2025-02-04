import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "./ui/dropdown-menu"
import AccountMenuLink from "./AccountMenuLink";
import {
    EllipsisVertical,
    Plus,
    GalleryHorizontalEnd,
    CircleHelp,
    FilePenLine,
    CalendarPlus,
    CircleDashed
} from "lucide-react";

const ActionMenu = () => {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="bg-transparent focus:outline-none p-0">
            <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Project</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-alc-light-gray/60" />            
            <DropdownMenuItem><FilePenLine /><AccountMenuLink link="/" title="Edit project"/></DropdownMenuItem>
            <DropdownMenuItem><CalendarPlus /><AccountMenuLink link="/" title="Schedule new task"/></DropdownMenuItem>
            <DropdownMenuItem><CircleDashed /><AccountMenuLink link="/" title="Tasks on hold"/></DropdownMenuItem>
            <DropdownMenuSeparator className="bg-alc-light-gray/60" />
            <DropdownMenuItem><Plus /><AccountMenuLink link="/" title="Create new project"/></DropdownMenuItem>
            <DropdownMenuItem><GalleryHorizontalEnd /><AccountMenuLink link="/" title="View my projects"/></DropdownMenuItem>            
            <DropdownMenuSeparator className="bg-alc-light-gray/60" />
            <DropdownMenuItem className="text-alc-sky-blue"><CircleHelp /><AccountMenuLink className="text-alc-sky-blue" link="/" title="Help and support"/></DropdownMenuItem>            
        </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ActionMenu;