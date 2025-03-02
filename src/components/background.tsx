"use client"
import { useRef, useState } from "react";
import { Star } from "./star";
import { useEffect } from "react";
import { ShootingStar } from "./shooting-star";

let stars = Array.from({length:300},(_,i) => i);

export const Background = () => {
    const [width,setWidth] = useState(0);
    const [height,setHeight] = useState(0);

    useEffect(()=>{
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        setWidth(screenWidth);
        setHeight(screenHeight);
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    } 
    ,[])

    return <div 
        className="top-0 left-0 z-[-1000] overflow-hidden fixed w-screen h-screen bg-gradient-to-t from-[#493c21] from-0% via-[#002A67] via-15% via-[#0B2133] via-50% to-[#00060D] to-100%"
        >
                {stars.map((data) =>{
                    let xPos = Math.floor(Math.random() * width);
                    let yPos = Math.floor(Math.random() * height);
                    let opacity = Math.round((1 - (yPos / height))*100)/100;
                    let randomNumber = Math.random() * 100;
                    const size = 0.5 + (randomNumber / 100) * (2 - 0.5);
                    return <Star key={data} xPos={xPos} yPos={yPos} size={size} opacity={opacity ? opacity : 1}/>
                })}
                <ShootingStar />
    </div>
}