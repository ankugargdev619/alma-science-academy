import { Background } from "@/components/background";
import { LoaderLogo } from "@/components/loader";
import { Suspense } from "react";
import Loading from "./loading";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (<div className="relative w-full">
    <Header />
    <div className="absolute top-24 md:top-16 -z-10">
      <Hero />
    </div>
  </div>
  );
}
