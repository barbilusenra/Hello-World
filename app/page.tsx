'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightThick } from "react-icons/ti";
import { motion } from "framer-motion";
import {slideAnimation} from "../config/motion"
import {fadeAnimation} from "../config/motion"
import Image1 from "/images/chat1.svg"
import localFont from 'next/font/local'
import Image2 from "/images/phone-chat.svg"
import Reveal from "@/components/ui/Reveal";

const sobread = localFont({
  src: '../public/fonts/Sobread-ALnD7.otf',
  display: 'swap'
});

export default function Home() {
  return (
    <main className="">
      <div className="relative isolate dark:bg-gray-900 ">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] 
            w-[36.125rem] -translate-x-1/2 rotate-[30deg] 
            bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] 
            opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">

              <div
                className={`flex items-center justify-center lg:flex-row  gap-x-10 flex-col tracking-wide text-7xl
               text-bold text-gray-700  dark:text-white max-w-[700px] lg:max-w-[1000px] w-auto h-auto p-5 ${sobread.className}`}
              >
                <motion.div {...slideAnimation("left")} className="flex flex-col gap-y-1">
                  Chat with Anyone, 
                  <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                    anywhere!
                  </span>
                </motion.div>
                
                <motion.div {...slideAnimation("right")} className="-mt-[12px] -mr-[60px] lg:mr-0 w-full flex items-center justify-center">
                  <Image
                    src={Image1}
                    alt="logo"
                    className="dark:filter lg:w-[400px] w-[300px]"
                  />
                </motion.div>  
              </div>
            
              <motion.div {...slideAnimation("up")}> 
                  <p className="dark:text-transparent text-xl font-bold bg-clip-text text-slate-600 dark:bg-gradient-to-r from-slate-200 to-pink-100 mt-[15px]">
                You speak your language, they speak their language.{" "}
                <span className="text-transparent text-xl font-bold bg-clip-text bg-gradient-to-r from-orange-600 to-pink-500 dark:bg-gradient-to-r dark:from-orange-600 dark:to-pink-500">
                  Let AI handle the translation.
                </span>
              </p>
              </motion.div>
            
            {/* Unlock All Languages */}
            <div
              className={`flex items-center justify-center mt-[50px] lg:flex-row gap-x-10 flex-col tracking-wide text-7xl
              text-bold text-gray-700  dark:text-white max-w-[700px] lg:max-w-[1000px] w-auto h-auto p-5`}
            >        

              {/* Image */}
              <div className="-mt-[12px] -mr-[60px] lg:mr-0 w-full flex justify-center items-center mb-[20px]"> 
                <Reveal hold={0.7} animation={slideAnimation("left")}>
                  <Image
                    src={Image2}
                    alt="logo"
                    className="dark:filter lg:w-[400px] w-[300px]"
                  />                  
                </Reveal>          
              </div> 
              
              {/* Text */}
              <div> 
                <Reveal hold={0.7} animation={slideAnimation("right")}>
                  <p className={`text-6xl leading-14  text-gray-600 dark:text-gray-200 ${sobread.className}`}>
                  Unlock all languages with {" "}
                  <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Premium!</span></p>
                  <p className="text-transparent tracking-normal text-xl font-bold bg-clip-text bg-gradient-to-r from-orange-600 to-pink-500 mt-[15px]">
                  Elevate your chat experience, breaking barriers effortlessly.
                  </p>
                </Reveal>
              </div>
            </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/chat"
                  className={`bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xl py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 ${sobread.className}  tracking-widest hover:animate-pulse active:animate-bounce`}
                  >
                   GET STARTED
                  </Link>
                  <Link
                  href="/pricing"
                  className={`${sobread.className} btn-pricing flex items-center gap-2 text-xl tracking-widest  font-sobread leading-6 text-gray-700 dark:text-gray-200`}
                  >
                    View Pricing <span aria-hidden="true"><TiArrowRightThick /></span>
                  </Link>
              </div>
            </div>

            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                {/* <Image
                  unoptimized
                  src={DemoGif}
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
