import React from "react";
import useTheme from "../hooks/use-theme";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex">
      <button
        aria-label={`Change theme to ${
          theme === "light" ? "dark" : "light"
        } mode`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <img src="/assets/sun.svg" alt="sun" className="w-[18px] h-[18px]" />
        ) : (
          <img
            src="/assets/moon.svg"
            alt="moon"
            className="w-[18px] h-[18px]"
          />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
