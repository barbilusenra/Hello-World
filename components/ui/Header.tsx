import { getServerSession } from "next-auth";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { authOptions } from "@/auth";
import Link from "next/link";
import { LuMessagesSquare } from "react-icons/lu";
import { Button } from "./button";
import CreateChatButton from "./CreateChatButton";
import UpgradeBanner from "./UpgradeBanner";
import LanguageSelect from "./LanguageSelect";


async function Header() {
  const session = await getServerSession(authOptions);

  return (
  <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
    <nav className="flex flex-col sm:flex-row items-center p-4 pl-4 bg-white dark:bg-gray-900 w-full mx-auto">
        <Logo />

    <div className="flex-1 flex items-center justify-end mt-[18px] space-x-3">
      
      <LanguageSelect />

      {session ? (
        <>
        <Link href={'/chat'} prefetch={false}>
      
        <LuMessagesSquare className="text-black dark:text-white h-[25px] w-full"/>
           
        </Link>     
        <CreateChatButton />
        </>
      ) : (
        <Link href='/pricing'>Pricing</Link>
      )}

      <DarkModeToggle />
      <UserButton session={session} />
    </div>
    </nav>

    {/* Upgrade Banner */}
        <UpgradeBanner />
  </header>
  );
}

export default Header