'use client'

import { useSubscriptionStore } from "@/store/store"
import { useRouter } from "next/navigation";
import { Button } from "./button";

function UpgradeBanner() {
    const subscription = useSubscriptionStore((state) => state.subscription);

    const isPro = subscription?.status === "active";
    const router = useRouter();

if (subscription === undefined || isPro) return null;


  return (
    <Button
        onClick={() => router.push("/register")}
        className="upgrade-container w-full rounded-none bg-gradient-to-r from-[#ffc17a] to-[#ff631a] text-center text-white px-5 py-1
        hover:from-[#fff598] hover:to-[#fa772b] hover:shadow-md hover:opacity-65 transition-all"
    >
        Upgrade to Pro to unlock all features!
    </Button>
  )
}

export default UpgradeBanner