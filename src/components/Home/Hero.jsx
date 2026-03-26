"use client";
import { useTheme } from "@/hooks/ThemeContext";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
    const { theme } = useTheme();
    useEffect(() => {
        console.log(theme);
    }, [theme]);
    return (
        <div className="border-b-[0.5px] pb-7 -mx-5">
            <div className="w-full  bg-black/5  overflow-hidden pointer-events-none"> {/*aspect-5/2*/}
                <Image src={art} width={1500} alt="Art Display" className=" grayscale-75" />
            </div>
        </div>
    );
}
