import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MenuDropdown() {
  const styles = {
    nav: "relative rounded bg-scndBg/90",
    div: "p-1.5",
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
    li: "rounded p-1.5 hover:bg-thirdBg/90",
    a: "",
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
      <div className={styles.div}>Current Menu</div>
      <ul className={[showMenu, styles.ulDropdown].join(" ")}>
        {/* <li className={styles.li}>
          <NavLink className={styles.a} to="/">
            Main
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/anime">Anime</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/manga">Manga</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/error">Error</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
