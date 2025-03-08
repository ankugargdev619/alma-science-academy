import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({children}: Readonly<{
  children: React.ReactNode;
}>){
    return <>
        <Background />
        <div className="flex justify-center">
            <div className="relative w-full p-6 md:p-10 max-w-[1500px]">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    </>
} 