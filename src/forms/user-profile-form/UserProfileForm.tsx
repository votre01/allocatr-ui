import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    birthdate: z.string().min(1, "Birth date is required"),
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

const UserProfileForm({ onSave, isLoading }: Props) => {
    const form = useForm<UserFormData>({
        resolver:zodResolver(formSchema),
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className="space-y-4"
            >

            </form>

        </Form>
    )
}
