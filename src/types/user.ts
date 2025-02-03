export type User = {
    id: string,
    name: string,
    email: string,
    profilePicture?: string
    // role: "client" | "allocat" | "admin"
    // verified: boolean
} | null;
