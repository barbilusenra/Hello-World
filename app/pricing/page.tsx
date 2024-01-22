'use client'

import PricingCards from "@/components/ui/PricingCards";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";
import localFont from 'next/font/local'
import Image3 from "/images/premium-price.svg"
import Image from "next/image";
import { motion } from "framer-motion";
import {slideAnimation} from "../../config/motion"

const sobread = localFont({
  src: '../../public/fonts/Sobread-ALnD7.otf',
  display: 'swap'
});

const PricingPage = () => {
  return (
    <div className="isolate overflow-hidden bg-gray-900 ">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-20 text-center sm:pt-15 lg:px-8">
       
        <div className="-mt-[30px] lg:mt-0 flex justify-center items-center gap-y-5 lg:gap-y-0 lg:flex-row gap-x-10 flex-col  mx-auto max-w-4xl">
          <motion.div {...slideAnimation("left")} className="flex flex-col gap-y-1">
           
          <p className={`mt-2 text-4xl ${sobread.className} tracking-wide text-white sm:text-5xl`}>
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">whoever you are</span>
          </p>
          </motion.div>
          <motion.div {...slideAnimation("right")}>
             <Image
           src={Image3}
           alt="logo"
           className="dark:filter lg:w-[200px] w-[150px]"
          />
          </motion.div>
         
        </div>
        
        <div className="relative mt-6">
        
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem]
             -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] 
             sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient-pricing)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="rgb(8 47 73)" />
                <stop offset={1} stopColor="rgb(8 47 73)" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root pb-24 sm:pb-32">
        <div className="-mt-[280px]">
            <PricingCards redirect={true} />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
