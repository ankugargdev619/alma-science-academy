"use client"
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react"
import {motion} from "framer-motion";

interface MapProps {
    lat : number,
    lng : number
}

export const Map = ({lat,lng} : MapProps) => {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() =>{
        const initMap = async() =>{
            const loader = new Loader({
                apiKey : process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version : "weekly"
            })

            const position =  {
                lat : lat,
                lng : lng
            }

            const mapOptions : google.maps.MapOptions = {
                center : position,
                zoom : 15,
                mapId : 'ALMA_SCIENCE'
            }

            const { Map } = await loader.importLibrary('maps');
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
            const map = new Map(mapRef.current as HTMLDivElement,mapOptions)
            new AdvancedMarkerElement({
                map:map,
                position:position,
                title: 'Alma Science Academy'
            });
        }

        initMap();

    } ,[])

    return <>
        <motion.div 
            className="w-full h-80" ref={mapRef} />
    </>
}