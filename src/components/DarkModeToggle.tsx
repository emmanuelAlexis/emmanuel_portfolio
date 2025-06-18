import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import React from "react";

const DarkModeToggle = ({ variants }: { variants: "fixed" | "block" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${variants} right-3 top-3`}>
      <button
        className={`flex p-3 ${
          variants === "fixed"
            ? "bg-primary bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-xl rounded-tr-2xl"
            : ""
        }`}
        onClick={toggleTheme}
      >
        <Sun
          className={`h-[1.2rem] ${
            variants === "fixed" ? "text-primary-foreground" : "text-foreground"
          } w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`}
        />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
