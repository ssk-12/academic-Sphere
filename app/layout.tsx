import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppbarClient } from "./components/AppbarClient";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academic Sphere",
  description: "LOC-BASED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Providers>
        <body className={inter.className}>
          <div className="h-screen flex flex-col">
            <div className="fixed top-0" style={{ height: '10%' }}>
              <AppbarClient/>
            </div>
            <div className="flex-grow overflow-y-auto">
              {children}
            </div>
          </div>

        </body>
      </Providers>
    </html>
  );
}
