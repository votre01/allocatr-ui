import { z } from "zod";

const formSchema = z.object({
    firstname: z.string().min(1, "First name is required"),
    
});

