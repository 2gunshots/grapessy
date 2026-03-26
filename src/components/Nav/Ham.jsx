"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useTheme } from "@/hooks/ThemeContext";

export default function Ham() {
    const { theme } = useTheme();
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <div
                onClick={() => {
                    setOpenSidebar(true);
                }}
                className="cursor-pointer w-fit"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.7}
                    stroke="currentColor"
                    className="size-9 scale-x-130"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            <Sidebar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
                theme={theme}
            />
        </>
    );
}
