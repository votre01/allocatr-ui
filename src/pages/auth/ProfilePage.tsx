import { Pencil } from "lucide-react";
import {
    Dialog,
    DialogClose,
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
            <DialogTrigger><Pencil /></DialogTrigger>
            
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