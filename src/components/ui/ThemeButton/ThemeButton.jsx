import { useEffect, useState } from "react";
import { ReactComponent as Moon } from "./img/moon.svg";
import { ReactComponent as Sun } from "./img/sun.svg";

export default function ThemeButton() {
  const [isDark, setIsDark] = useState(false)
  function handleClick() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      setIsDark(false)
    } else {
      setIsDark(true)
      document.body.className = 'dark';
    }
  }
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.className = "dark";
      setIsDark(true)
    }
  }, []);
  return (
    <button
      className="p-0.5 rounded bg-lightPrimary text-lightBg dark:bg-scndBg/90 dark:text-white"
      onClick={handleClick}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}

// --color-primary-bg: 18 23 37;
// --color-scnd-bg: 18 35 45;
// --color-third-bg: 54 130 127;
// https://www.realtimecolors.com/?colors=0e0e18-f4f4f8-666ba5-ceabce-b885a1&fonts=Inter-Inter
