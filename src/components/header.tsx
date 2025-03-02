"use client"
import Link from "next/link"
import { Logo } from "./logo"
import { useState } from "react"
import {AnimatePresence, motion} from "framer-motion"



export const Header = ()=>{
    const [isOpen,setIsOpen] = useState(false);

    function handleLinkClick(){
        setIsOpen(false);
    }
    return <div className="sticky top-10 overflow-hidden rounded-lg w-full">
        <AnimatePresence>
            <div className="py-4 backdrop-blur-lg backdrop-filter w-full h-full rounded-lg">
                <div className="flex justify-between mx-10">
                    <Logo scale={75} />
                    <div className="hidden md:flex justify-end gap-16 items-center">
                        <Link href={"/"}>Home </Link>
                        <Link href={"/all-courses"}>All Courses</Link>
                        <Link href={"/about-us"}>About Us</Link>
                        <Link href={"/contact-us"}>Contact Us</Link>
                        <Link href={"/resources"}>Resources</Link>
                        
                    </div>
                    <motion.div 
                        animate = {isOpen ? 'open' : 'close'}
                        onClick={()=>{setIsOpen(!isOpen)}} 
                        className="md:hidden flex flex-col gap-2 items-center">
                        <motion.div
                            variants={{
                                open : {
                                    y : ["0","10px","10px"],
                                    rotate : ["0","0","45deg"]
                                },
                                close : {
                                    y : ["10px","10px","0"],
                                    rotate : ["45deg","0","0"]
                                }
                            }}
                            transition={{
                                duration : 1
                            }}
                            className="w-10 h-[2px] bg-white rounded-full"></motion.div>
                        <motion.div 
                            variants={{
                                open : {
                                    rotate : ["0","0","-45deg"]
                                },
                                close : {
                                    rotate : ["-45deg","0","0"]
                                }
                            }}
                            transition={{
                                duration : 1
                            }}
                            className="w-10 h-[2px] bg-white rounded-full"></motion.div>
                        <motion.div 
                            variants={{
                                open : {
                                    y : ["0","-10px","-10px"],
                                    rotate : ["0","0","45deg"]
                                },
                                close : {
                                    y :  ["-10px","-10px","0"],
                                    rotate : ["45deg","0","0"]
                                }
                            }}
                            transition={{
                                duration : 1
                            }}
                            className="w-10 h-[2px] rounded-full">
                                <div className="w-6 h-full bg-white rounded-full" />
                            </motion.div>
                    </motion.div>
                </div>
                <motion.div 
                    initial = {{display : "hidden"}}
                    animate = {isOpen ? 'open' : 'close'}
                    variants={{
                        open : {
                            height : 'auto',
                            display : "flex",
                            opacity : 1,
                            color : "white",
                            marginTop : "30px"
                        },
                        close : {
                            height : '0',
                            display : "hidden",
                            opacity : 0,
                            color : "transparent",
                            marginTop : 0
                        }
                    }}
                    transition={{
                        duration : 1
                    }}
                    className="hidden flex-col gap-2 mx-10">
                    <Link onClick={handleLinkClick} href={"/"}>Home </Link>
                    <Link onClick={handleLinkClick} href={"/all-courses"}>All Courses</Link>
                    <Link onClick={handleLinkClick} href={"/about-us"}>About Us</Link>
                    <Link onClick={handleLinkClick} href={"/contact-us"}>Contact Us</Link>
                    <Link onClick={handleLinkClick} href={"/resources"}>Resources</Link>
                </motion.div>
            </div>
        </AnimatePresence>
    </div>
}