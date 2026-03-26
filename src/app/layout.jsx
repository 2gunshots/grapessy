import Navbar from "@/components/Nav/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/hooks/ThemeContext";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import { Shippori_Mincho } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import Footer from "@/components/Home/Footer";
//Lancelot font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-montserrat",
});
const shipporiMincho = Shippori_Mincho({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-shippori",
});
const ebGaramond = EB_Garamond({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
    variable: "--font-garamond",
});
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-inter",
});
export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            webcrx=""
            className={`${montserrat.variable} ${shipporiMincho.variable} ${inter.variable} ${ebGaramond.variable} `}
        >
            <body className={`overflow-x-hidden antialiased`}>
                {/* <ThemeProvider> */}
                <Navbar />
                <div className="mt-20 z-10">
                    {/* <div className="relative z-10 bg-[#f6f6f6] min-h-screen mb-14 sm:mb-17.5 md:mb-49 border-b shadow-[0_12px_20px_-10px_rgba(0,0,0,0.3)] "> */}
                    {children}
                    {/* </div> */}

                    {/* This is where footer should be, but rn theres no footer only display work and alert bg blur is kinda messing with this so i'll ship this to home. */}
                    {/* <Footer /> */}
                </div>
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
