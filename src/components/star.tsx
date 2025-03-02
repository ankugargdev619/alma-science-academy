"use client"
import { motion } from "framer-motion"

interface StarProps {
    xPos : number,
    yPos : number,
    size? : number,
    opacity? : number
}

export const Star = ({xPos,yPos,size=0.5,opacity=1} : StarProps) => {

    return <motion.div 
        style={{
            top : `${yPos}px`,
            left : `${xPos}px`,
            width : `${size}px`,
            height : `${size}px`,
            borderRadius : "50%"
        }}
        className={`absolute bg-slate-300 `} 
        initial = {{
            opacity : opacity,
            scale : 0.9
        }}
        animate = {{
            opacity : [opacity, opacity * 1.25, opacity],
            scale : [0.9,1,0.9],
            transition : {
                duration : 1 * size,
                repeat : Infinity,
                ease : "easeOut",
                delay : Math.random()
            }
        }}
    />
}