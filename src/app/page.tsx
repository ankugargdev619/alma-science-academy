/*import { Background } from "@/components/background";
import { LoaderLogo } from "@/components/loader";
import { Suspense } from "react";
import Loading from "./loading";*/
"use client"
import { Carousel } from "@/components/carousel";
import { Features } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LoaderLogo } from "@/components/loader";
import { StudentsSection } from "@/components/students-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading,setIsLoading] = useState(true);
  // This is a bad approach I'll loose out on the benefits of the SSR
  useEffect(()=>{
      const delay = setTimeout(()=>{setIsLoading(false)},5000);
      return ()=>{clearTimeout(delay)}
  },[isLoading])
  return <> {!isLoading ? (
              <div className="relative w-inherit">
                  <Header />
                  <div className="absolute px-2 md:px-12 w-inherit top-24 md:top-16 -z-10">
                    <Hero />
                    <Features />
                    <StudentsSection />
                    <Carousel />
                    <Footer />
                  </div>
              </div>
            ) : 
              <div className="flex items-center justify-center w-full h-full">
                <LoaderLogo />
              </div> }
  </>
}
