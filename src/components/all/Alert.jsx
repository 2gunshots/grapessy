"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Alert({ type, message }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                        scale: 0.5,
                        y: 0,
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                        y: 0,
                    }}
                    exit={{ opacity: 1, filter: "blur(10px)", scale: 0, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                    }}
                    style={{ WebkitBackdropFilter: "blur(16px)" }}
                    className={`fixed isolate bottom-10 left-1/2 transform -translate-x-1/2 px-5 sm:px-20 py-2 sm:py-3 rounded-full shadow-md text-[#111111] text-[11px] text-center sm:text-sm  bg-white/50  backdrop-blur-lg border z-50 font-montserrat  font-medium
                    ${type === "success" ? "  border-green-800 " : "border-red-800"}`}
                >
                    <span>{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// initial={{ filter: "blur(10px)", opacity: 0 , scale: 0}}
// animate={{ filter: "blur(0px)", opacity: 100, scale:1 }}
// transition={{ duration: 0.2 }}
