"use client";
import { useTheme } from "@/hooks/ThemeContext";
export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex justify-end items-center">
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
};
