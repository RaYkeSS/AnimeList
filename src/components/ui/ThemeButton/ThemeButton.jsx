import { useEffect, useState } from "react";
import { ReactComponent as Moon } from "./img/moon.svg";
import { ReactComponent as Sun } from "./img/sun.svg";

export default function ThemeButton() {
  const [theme, setTheme] = useState("");
  function handleClick() {
    document.body.className = theme;
  }
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.body.className = theme;
    }
  }, [theme]);
  return (
    <button
      className="p-0.5 rounded bg-lightPrimary text-lightBg dark:bg-scndBg/90 dark:text-white"
      onClick={handleClick}
    >
      <Moon className="" />
    </button>
  );
}

// --color-primary-bg: 18 23 37;
// --color-scnd-bg: 18 35 45;
// --color-third-bg: 54 130 127;
// https://www.realtimecolors.com/?colors=0e0e18-f4f4f8-666ba5-ceabce-b885a1&fonts=Inter-Inter
