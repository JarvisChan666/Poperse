/**
 * @dev make our page look good and 
 * use this component to make everypage looks the same
 */

import { cn } from "@/lib/utils";

// TODO Type or interface
interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({className, children} : MaxWidthWrapperProps) => {
    return (
        // By default it has a className, and we append our custom one.
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;