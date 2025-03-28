import { Pencil } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const ProfilePage = () => {
    return (
        <Dialog>
            <DialogTrigger
                className="flex align-center gap-2 bg-transparent focus:outline-none hover:text-alc-gray">
                <Pencil className="w-[18px]"/>Edit profile
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl ">           
                <DialogHeader>
                <DialogTitle>Profile update</DialogTitle>
                <DialogDescription className="max-w-[80%]">
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
                <UserProfileForm />
                {/* <DialogFooter>
                    <Button type="submit">Confirm</Button>
                </DialogFooter> */}
            </DialogContent>            
        </Dialog>        
    );
};

export default ProfilePage;