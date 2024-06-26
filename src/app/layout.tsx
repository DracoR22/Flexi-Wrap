import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/navbar";
import { fonts } from "@/lib/fonts";
import Providers from "@/components/global/providers";
import Footer from "@/components/landing/footer";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts}>
        <Providers attribute="class" defaultTheme="light" disableTransitionOnChange>
         <Navbar/>
          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
           <div className="flex-1 flex flex-col h-full">
              {children}
           </div>
         <Footer/>
         </main>
         <Toaster/>
        </Providers>
      </body>
    </html>
  );
}
