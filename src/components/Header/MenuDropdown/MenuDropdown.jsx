import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MenuDropdown() {
  const location = useLocation();
  function setPath() {
    if(location.pathname === '/') return 'Main'
    const rawPath = location.pathname.slice(1, location.pathname.length);
    const path = rawPath.charAt(0).toUpperCase() + rawPath.slice(1)
    return path
  }
  const styles = {
    nav: "relative rounded bg-scndBg/90",
    div: "p-1.5 min-w-20 text-center",
    ulDropdown: `
    z-1 
    absolute 
    top-full 
    left-1/2 
    transform 
    -translate-x-1/2 
    flex flex-col 
    bg-scndBg/90 
    w-full 
    text-center 
    rounded
    p-1.5
    `,
    li: "",
    a: "p-1.5 block hover:bg-thirdBg/90 rounded",
    activeLink: 'p-1.5 block bg-primaryBg/90 rounded'
  };

  const [showMenu, setShowMenu] = useState("hidden");
  function handleShowDropdown() {
    setShowMenu("block");
  }
  function handleHideDropdown() {
    setShowMenu("hidden");
  }
  return (
    <nav
      className={styles.nav}
      onMouseOver={handleShowDropdown}
      onMouseLeave={handleHideDropdown}
    >
      <div className={styles.div}>{setPath()}</div>
      <ul className={[showMenu, styles.ulDropdown].join(" ")}>
        <li className={styles.li}>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.a} to="/">
            Main
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.a} to="/anime">Anime</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.a} to="/manga">Manga</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.a} to="/error">Error</NavLink>
        </li>
      </ul>
    </nav>
  );
}
