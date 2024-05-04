import  ClassAppbar  from "@/app/components/ClassAppbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className={inter.className}>
          <div>
            {/* <div className="fixed top-[60px] w-screen">
                <ClassAppbar/>
            </div> */}
            <div className="">
              {children}
            </div>
          </div>
        </div>
  );
}