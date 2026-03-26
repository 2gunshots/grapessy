"use client";

import { ThemeToggleButton } from "./ThemeToggleButton";
import Ham from "./Ham";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div
            style={{
                backgroundColor: "var(--background)",
            }}
            className={`fixed top-0 px-5 w-full z-50`}
        >
            <div className="grid grid-cols-3 auto-rows-min py-5 border-b-[0.5px] w-full">
                {/* <Ham /> */}
                <div className={`col-start-2 flex justify-center items-center`}>
                    <Link
                        className=" font-shippori flex gap-5 items-center"
                        href="/"
                    >
                        <motion.h1
                            className={`font-shippori text-center text-3xl font-medium `}
                            initial={{ filter: "blur(8px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 100 }}
                            transition={{ duration: 0.4 }}
                        >
                            Grapessy
                        </motion.h1>
                    </Link>
                </div>
                {/* <ThemeToggleButton /> */}
            </div>
        </div>
    );
};
export default Navbar;
