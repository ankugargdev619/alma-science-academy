import { SiGmail , SiInstagram , SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
    return <div className="relative rounded-lg overflow-clip h-fit my-5 md:my-10">
        <div className="absolute -z-10 w-full h-full -z-1 bg-black opacity-20" />
        <div className="p-5">
            <div className="flex flex-grow justify-center gap-5 md:gap-10 my-5 md:my-10">
                <SiGmail size={30}/>
                <SiInstagram size={30} />
                <SiFacebook size={30} />
                <FaSquareXTwitter size={30} />
            </div>
            <div className="flex flex-wrap flex-grow justify-center gap-4 md:gap-10 my-5 md:my-10">
                <Link  href={"/all-courses"}>All Courses</Link>
                <Link href={"/about-us"}>About Us</Link>
                <Link href={"/contact-us"}>Contact Us</Link>
                <Link href={"/resources"}>Resources</Link>
            </div>
        </div>
    </div>
}