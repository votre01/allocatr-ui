import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const formSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    birth_date: z.string().min(1, "Birth date is required"),
    gender: z.string().min(1, "Gender is required"),
    phone: z.string().min(1, "Phone is required"),
    id_number: z.string().min(1, "ID number is required"),
    profile_picture: z.string().optional(),
    bio: z.string().min(1, "Biography is required"),
    is_company: z.boolean(),
    company_name: z.string().optional(),
    company_registration: z.string().optional(),
    accreditation: z.string().optional(),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),    
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
}

const UserProfileForm = ({ onSave, isLoading}: Props) => {
    const form = useForm<UserFormData>({
        resolver:zodResolver(formSchema),
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className="flex flex-col w-full mx-auto space-y-4"
            >
                {/* <div>
                    <h2>Profile</h2>
                    <FormDescription>
                        View and update your profile
                    </FormDescription>
                </div> */}
                <div className="space-y-4">
                    <div className="flex gap-2 justify-between items-center">
                        <FormField control={form.control} name="first_name" render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel>First name</FormLabel>
                                <FormControl>
                                    <Input {...field} className="border-alc-gray/40" />
                                </FormControl>
                                <FormMessage className="font-normal" />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="last_name" render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel>Last name</FormLabel>
                                <FormControl>
                                    <Input {...field} className="border-alc-gray/40"/>
                                </FormControl>
                                <FormMessage className="font-normal" />
                            </FormItem>
                        )}/>
                    </div>

                    <div className="flex gap-2">
                        <FormField control={form.control} name="birth_date" render={({field}) => (
                            <FormItem className="w-[40%]">
                                <FormLabel>Birth date</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} className="border-alc-gray/40" />
                                </FormControl>
                                <FormMessage className="font-normal" />
                            </FormItem>
                        )}/>                        
                        <FormField control={form.control} name="id_number" render={({field}) => (
                            <FormItem className="w-[40%]">
                                <FormLabel>ID Number</FormLabel>
                                <FormControl>
                                    <Input type="" {...field} className="border-alc-gray/40" />
                                </FormControl>
                                <FormMessage className="font-normal" />
                            </FormItem>                            
                        )}/>
                        <FormField control={form.control} name="gender" render={({field}) => (
                            <FormItem className="w-[20%]">
                                <FormLabel>Gender</FormLabel>
                                <FormControl className="background-transparent">
                                    <Select {...field} >
                                        <SelectTrigger className="border-alc-gray/40">
                                            <SelectValue placeholder="Gender" />
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                            </SelectContent>
                                        </SelectTrigger>
                                    </Select>
                                    {/* <Input type="select" {...field} className="border-alc-gray/40" /> */}
                                </FormControl>
                                <FormMessage className="font-normal" />
                            </FormItem>                            
                        )}/>
                    </div>
                    <FormField control={form.control} name="phone" render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input type="tel" {...field} className="border-alc-gray/40" />
                            </FormControl>
                            <FormMessage className="font-normal" />
                        </FormItem>                    
                    )}/>
                </div>
                <div className="flex justify-end">
                {isLoading ? (
                    <LoadingButton />
                ) : (
                    <Button
                        type="submit"
                        variant="green"
                        className="w-[20%]"
                    >
                        Update
                    </Button>
                )}
                </div>
            </form>
        </Form>
    );
};

export default UserProfileForm;
