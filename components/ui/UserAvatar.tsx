import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import Image from "next/image";

const UserAvatar = ({
    name,
    image,
    className
}: {
    name?: string | null ;
    image?: string | null;
    className?: string;
}) => {
  return (
    <Avatar className={cn("bg-white  text-black", className)}> 
        {image && (
            <Image
            src={image}
            alt={name || "User name"}
            width={40}
            height={40}
            className="rounded-full"
        />
        )}

    <AvatarFallback 
    delayMs={100}
    className="dark:bg-black dark:text-white text-lg">
        {name
            ?.split(" ")
            .map((n) => n[0])
            .join("")}
    </AvatarFallback>
  </Avatar>
  
  )
}

export default UserAvatar