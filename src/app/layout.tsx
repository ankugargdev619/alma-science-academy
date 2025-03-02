import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import { Background } from "@/components/background";


const outfit = Outfit({
  subsets : ["latin"]
});

export const metadata: Metadata = {
  title: "Alma Science Academy",
  description: "Science, Maths, Physics, Tuition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <Background />
        <div className="flex justify-center">
          <div className="relative w-full p-6 md:p-10 max-w-[1500px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
