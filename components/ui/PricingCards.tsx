import Link from "next/link";
import { BiMessageRoundedCheck } from "react-icons/bi";
import CheckoutButton from "./CheckoutButton";
import localFont from "next/font/local";
import Reveal from "./Reveal";
import { slideAnimation } from "@/config/motion";

const sobread = localFont({
  src: "../../public/fonts/Sobread-ALnD7.otf",
  display: "swap",
});

const tiers = [
  {
    name: "Starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "Get chatting right away with anyone, anywhere!",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant limit in Chat",
      "3 Chat Rooms limit",
      "Support 2 languages",
      "48-hour support response time",
    ],
  },
  {
    name: "Pro",
    id: "pro",
    href: "#",
    priceMonthly: "USD 5.99",
    description: "Unlock the Full Potential with Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia support in chats (coming soon)",
      "1-hour, dedicated support response time",
      "Early access to New Features",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 x-20">
        {tiers.map((tier, i) => (
          <Reveal
            animation={
              i === 0 ? slideAnimation("left") : slideAnimation("right")
            }
            key={tier.id}
            hold={0.5}
            customClass="flex justify-start relative shadow-custom items-center flex-col p-4 pb-28 border-[2px] bg-gradient-to-r from-slate-500 to-pink-600/50 border-white/30 rounded-xl"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className={`${sobread.className} text-4xl tracking-wider text-orange-400 `}
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-white">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-base font-bold leading-7 tracking-wide text-orange-400">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-white ">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-2 text-base leading-7 text-white">
                {tier.description}
              </p>
              <ul
                role="list"
                className="mt-10 space-y-2 text-sm leading-7 tracking-wide text-white"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <BiMessageRoundedCheck
                      className="h-7 w-6 flex-none font-extrabold text-slate-200"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute bottom-5 flex items-center justify-center w-full">
              {redirect ? (
                <Link
                  href="/register"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full animate-pulse"
                >
                  Get Started Today
                </Link>
              ) : (
                tier.id && <CheckoutButton />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
