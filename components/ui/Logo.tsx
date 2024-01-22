import LogoImage from "/images/barbie-logo.svg"
import { AspectRatio } from "./aspect-ratio"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return(
   <Link href='/' prefetch={false} className="overflow-hidden">
   <div className="flex items-center w-72 h-16">
    <AspectRatio 
    ratio={16 / 9}
    className="flex items-center justify-center"
    >
      <Image
        priority
        src={LogoImage}
        alt="logo"
        className="-mt-[125px] w-auto h-[500px]"
        />
    </AspectRatio>
    </div>
  </Link>
  );
}

export default Logo