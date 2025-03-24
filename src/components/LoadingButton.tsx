import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"

const LoadingButton = () => {
    return (
        <Button disabled>
            <Loader2 className="animate-spin"></Loader2>
            Loading
        </Button>
    );
};

export default LoadingButton;