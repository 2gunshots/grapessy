"use client";

import { useTheme } from "@/hooks/ThemeContext";
import Link from "next/link";
import grapessy from "../../../public/grapessy logo.png";
import Image from "next/image";

export default function Sidebar({ openSidebar, setOpenSidebar }) {
    const { theme } = useTheme();

    const navItems = [
        // { label: "Winery", href: "/winery" },
        // { label: "Vineyard", href: "/vineyard" },
        { label: "Resort", href: "/resort" },
        // { label: "Wine Collection", href: "/wines" },
        // { label: "Our Story", href: "/about" },
        // { label: "Visit Us", href: "/visit" },
        { label: "Contact Us", href: "/contact" },
    ];

    if (!openSidebar) return null;
    return (
        <>
            <div className="fixed top-0 left-0  h-full z-10">
                <div className="flex  h-full">
                    <div className="backdrop-blur-xl bg-[#f6f6f6] h-full px-5 w-100 flex flex-col shadow-lg">
                        <div className="font-montserrat flex items-center border-b-[0.5px] py-5 justify-between text-sm">
                            <span className="uppercase">Menu</span>
                            <div
                                onClick={() => {
                                    setOpenSidebar(false);
                                }}
                                className="opacity-75 hover:opacity-100 cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.1}
                                    stroke="currentColor"
                                    className="size-6 "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="font-shippori text-2xl mt-10">
                            <ul className="space-y-1">
                                {navItems.map((item) => (
                                    <li
                                        key={item.href}
                                        className={`hover:text-black/55 transition-colors duration-300`}
                                        onClick={() => {
                                            setOpenSidebar(false);
                                        }}
                                    >
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full ${
                    theme === "dark" ? "bg-[#0a0a0a]/90" : "bg-black/50"
                } z-5`}
                onClick={() => {
                    setOpenSidebar(false);
                }}
            ></div>
        </>
    );
}
