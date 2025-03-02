"use client"
import {motion} from "framer-motion";
import { Amaranth} from "next/font/google";

const amaranth = Amaranth({
  weight : "400",
  style : "normal",
  subsets : ["latin"]
})

interface LogoProps {
    scale? : 50 | 75 | 90 | 95 | 100
}

export const Logo = ({scale = 100} : LogoProps) => {
    return <div className={`${amaranth.className} w-fit flex items-center gap-[2px] text-2xl cursor-pointer scale-${scale}`}>
                <motion.div className={`relative flex items-center justify-center w-[50px] h-[50px] rounded-lg border-[2px] border-[#A9ACB6]
                    `}
                    initial={{
                        backgroundImage : "linear-gradient(135deg,transparent 0%,transparent 25%,rgba(200,200,200,0.7) 50%,transparent 75% ,transparent 100%)",
                        backgroundSize : "200% 200%",
                        backgroundPosition : "200% 200%",
                        backgroundRepeat: "no-repeat"
                    }}
                    animate={{
                        backgroundPosition : "-100% -100%"
                    }}
                    transition={{duration : 1, ease : "easeInOut"}}

                    whileHover={{
                        backgroundPosition : ["200% 200%","-100% -100%","-100% -100%","200% 200%"],
                        backgroundImage:["linear-gradient(135deg,transparent 0%,transparent 25%,rgba(200,200,200,0.7) 50%,transparent 75% ,transparent 100%)",
                                        "linear-gradient(135deg,transparent 0%,transparent 25%,rgba(200,200,200,0.7) 50%,transparent 75% ,transparent 100%)",
                                        "none",
                                        "none"],
                        transition : {
                            repeat : Infinity,
                            duration : 4,
                            ease : "easeInOut",
                            repeatDelay : 2
                        }
                    }}
                    >
                    <span>Al</span>
                    <span className="text-xs absolute top-0 left-2">13</span>
                    <span className="text-xs absolute bottom-0 right-1">26</span>
                </motion.div>
                <div>
                    <span>ma</span>
                </div>
            </div>
}