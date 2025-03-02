"use client"
import {motion} from "framer-motion"
import { useEffect, useState } from "react"


export const ShootingStar = () => {
    let yPos =  -100;
    const [xPos,setXPos] = useState(0);
    useEffect(()=>{
        let width = window.innerWidth * 0.75;
        setXPos(width);
    },[])
    return <svg 
        className="absolute shoot h-[5px]"
        style={{
            transform : "rotate(-45deg)",
            
        }}
        viewBox="0 0 500 50" shapeRendering="geometricPrecision" textRendering="geometricPrecision" >
        <defs>
            <linearGradient id="epQGcFP4Ee33-fill" x1="0" y1="0.5" x2="1" y2="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
                <stop id="epQGcFP4Ee33-fill-0" offset="0%" stopColor="rgba(255,255,255,0.75)"/>
                <stop id="epQGcFP4Ee33-fill-1" offset="90%" stopColor="rgba(255,255,255,0)"/>
            </linearGradient>
        </defs>
        <g transform="matrix(1.459807 0 0 0.714286-72.149607-10.714299)">
            <path d="M64.9237,50c0-19.32998,15.67003-35.00002,35-35.00002c3.03487,0,5.97953.38627,8.78749,1.11232L376.43549,50L108.71119,83.8877c-2.80796.72606-5.75261,1.11232-8.78749,1.11232-19.32997,0-35-15.67004-35-35.00002Z" fill="url(#epQGcFP4Ee33-fill)" strokeWidth="0"/>
        </g>
    </svg>

}