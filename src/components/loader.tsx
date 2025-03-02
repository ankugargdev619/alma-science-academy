"use client"
import { useEffect, useState } from "react";
import { BlinkCursor } from "./blink-cursor";
import {motion} from "framer-motion";
import { Logo } from "./logo";
import { Amaranth} from "next/font/google";

const amaranth = Amaranth({
  weight : "400",
  style : "normal",
  subsets : ["latin"]
})



/**
 * Create a logo for Alma Science academy
 * @author : Ankit Sharma
 * @returns 
 */
export const LoaderLogo = ()=>{
    const texts = ["F=","ma Science Academy","ma"]
    const [textIndex,setTextIndex] = useState(0);
    const [displayedText,setDisplayedText] = useState("");
    const [isRemoving,setIsRemoving] = useState(false);
    const [isAnimating,setIsAnimating] = useState(true);
    const delay = 50;
    useEffect(()=> {
        const text = texts[textIndex];
        let timeout;
        if(!isRemoving && displayedText.length < text.length){
            timeout = setTimeout(()=>{
                setDisplayedText(text.slice(0,displayedText.length + 1))
            },delay);
        } else if (isRemoving && displayedText.length > 0){
            timeout = setTimeout(()=>{
                setDisplayedText(text.slice(0,displayedText.length -1))
            } ,delay);
        } else if (!isRemoving && textIndex < texts.length -1){
            timeout = setTimeout(()=>{
                setIsRemoving(true)
            },delay*4)
        } else {
            if(textIndex < texts.length -1 ){
                setTextIndex(textIndex + 1)
            }
            if(textIndex == texts.length -1){
                setIsAnimating(false);
            }
            timeout = setTimeout(()=>{
                setIsRemoving(false)
            })
        }
        return () => clearTimeout(timeout);
    },[isRemoving,textIndex,displayedText])
    return <div className={`${amaranth.className}`}>
            {isAnimating && <div className="flex items-center gap-[2px] text-2xl cursor-pointer">
                <div className={`relative flex items-center justify-center w-[50px] h-[50px] rounded-lg border-[2px] border-[#A9ACB6]`}>
                    <span>Al</span>
                    <span className="text-xs absolute top-0 left-2">13</span>
                    <span className="text-xs absolute bottom-0 right-1">26</span>
                </div>
                <div>
                    <motion.span>
                        {displayedText}
                    </motion.span>
                    {isAnimating && <BlinkCursor />}
                </div>
            </div>}
            {!isAnimating && <Logo />}
    </div>
}