"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./button";
import { signIn, signOut } from "next-auth/react";
import LoadingSpinner from "./LoadingSpinner";
import { useSubscriptionStore } from "@/store/store";
import { StarIcon } from "lucide-react";
import ManageAccountButton from "./ManageAccountButton";


const UserButton = ({ session }: { session: Session | null }) => {
  const subscription = useSubscriptionStore((state) => state.subscription);
  
  if (!session)
    return (
      <Button className="button-signIn hover:bg-slate-100" variant={"outline"} onClick={() => signIn()}>
       <span>Sign In</span><i></i>
      </Button>
    );
    
  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger className="triggerMenu">
          <UserAvatar name={session.user?.name} image={session.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" text-black dark:bg-zinc-900 dark:text-white mt-2">
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />    

          {subscription === undefined && (
            <DropdownMenuItem>
              <LoadingSpinner />
            </DropdownMenuItem>
          )}

          {subscription?.status === "active" && (
            <>
            <DropdownMenuLabel className="text-xs flex items-center justify-center space-x-1 text-[#ff7d49] animate-pulse">
            <StarIcon fill="#ff7d49" />
              <p>PRO</p>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="drop-content-menu">     
              <ManageAccountButton />
            </DropdownMenuItem>
            </>
          )}

          <DropdownMenuItem className="drop-content-menu" onClick={() => signOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
};

export default UserButton;
